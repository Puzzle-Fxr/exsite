import { useEffect, useRef } from "react";

type PolarBearHeroBackgroundProps = {
  className?: string;
  speed?: number;
  respectReducedMotion?: boolean;
};

const VW = 320;
const VH = 180;
const CYCLE = 6;

const C = {
  out: "#08141f",
  ice1: "#EAF6FB",
  ice2: "#D3E8F4",
  ice3: "#B5D5E7",
  ice4: "#93BCD3",
  floor: "#C6DFEE",
  floorD: "#AECEE2",

  fur: "#4FC9E0",
  furL: "#96EEFA",
  furD: "#2E93AF",
  furX: "#1B5F74",
  muzzle: "#C7F3FB",
  nose: "#10333F",

  overall: "#8B959F",
  overallD: "#5E6870",
  overallL: "#A7B1BA",
  metal: "#D9E0E6",

  deskTop: "#4B5D6C",
  deskSide: "#374754",
  deskDark: "#27323C",

  bezel: "#19222A",
  bezelL: "#2B3741",
  screen: "#08121E",
};

const codeColors = [
  "#7BE8FF",
  "#FFD166",
  "#C792EA",
  "#A6E3A1",
  "#7E9BB0",
  "#FF7B9C",
  "#89DDFF",
];

type CodeToken = {
  w: number;
  c: string;
};

type CodeLine = {
  indent: number;
  tokens: CodeToken[];
  total: number;
};

function rnd(seed: number) {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x);
}

function clamp(v: number, min: number, max: number) {
  return v < min ? min : v > max ? max : v;
}

function smooth(u: number) {
  return u * u * (3 - 2 * u);
}

const CODE_LINES: CodeLine[] = Array.from({ length: 28 }, (_, i) => {
  const indents = [0, 0, 4, 8, 4, 12];
  const indent = indents[Math.floor(rnd(i * 1.7) * indents.length)] ?? 0;

  const tokens: CodeToken[] = [];
  let total = 0;

  const count = 2 + Math.floor(rnd(i * 2.3) * 3);

  for (let j = 0; j < count; j++) {
    const w = 3 + Math.floor(rnd(i * 3.1 + j * 1.9) * 11);

    if (indent + total + w + 2 > 62) break;

    tokens.push({
      w,
      c: codeColors[Math.floor(rnd(i * 4.7 + j * 2.1) * codeColors.length)]!,
    });

    total += w + 2;
  }

  if (!tokens.length) {
    tokens.push({ w: 7, c: codeColors[0]! });
    total = 9;
  }

  return {
    indent,
    tokens,
    total: Math.max(1, total - 2),
  };
});

function mountPolarBearAnimation(
  canvas: HTMLCanvasElement,
  speed: number,
  respectReducedMotion: boolean
) {
  const out = canvas.getContext("2d");
  if (!out) return () => {};

  out.imageSmoothingEnabled = false;

  const scene = document.createElement("canvas");
  scene.width = VW;
  scene.height = VH;

  const g = scene.getContext("2d");
  if (!g) return () => {};

  g.imageSmoothingEnabled = false;

  const bg = document.createElement("canvas");
  bg.width = VW;
  bg.height = VH;

  const bgCtx = bg.getContext("2d");
  if (!bgCtx) return () => {};

  const px = (
    x: number,
    y: number,
    w: number,
    h: number,
    color: string
  ) => {
    g.fillStyle = color;
    g.fillRect(
      Math.round(x),
      Math.round(y),
      Math.max(1, Math.round(w)),
      Math.max(1, Math.round(h))
    );
  };

  const ellipse = (
    cx: number,
    cy: number,
    rx: number,
    ry: number,
    color: string
  ) => {
    const iry = Math.max(1, Math.round(ry));

    for (let yy = -iry; yy <= iry; yy++) {
      const k = 1 - (yy * yy) / (ry * ry);
      if (k < 0) continue;

      const dx = Math.floor(rx * Math.sqrt(k));
      px(cx - dx, cy + yy, dx * 2 + 1, 1, color);
    }
  };

  const ellipsePart = (
    cx: number,
    cy: number,
    rx: number,
    ry: number,
    color: string,
    fromY: number,
    toY: number
  ) => {
    const iry = Math.max(1, Math.round(ry));

    for (let yy = -iry; yy <= iry; yy++) {
      const y = cy + yy;
      if (y < fromY || y > toY) continue;

      const k = 1 - (yy * yy) / (ry * ry);
      if (k < 0) continue;

      const dx = Math.floor(rx * Math.sqrt(k));
      px(cx - dx, y, dx * 2 + 1, 1, color);
    }
  };

  const ellipseRim = (
    cx: number,
    cy: number,
    rx: number,
    ry: number,
    color: string
  ) => {
    const iry = Math.max(1, Math.round(ry));

    for (let yy = -iry; yy <= iry; yy++) {
      const k = 1 - (yy * yy) / (ry * ry);
      if (k < 0) continue;

      const dx = Math.floor(rx * Math.sqrt(k));
      px(cx - dx, cy + yy, 1, 1, color);
      px(cx + dx, cy + yy, 1, 1, color);
    }
  };

  const limb = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    r: number,
    color: string
  ) => {
    for (let i = 0; i <= 8; i++) {
      const u = i / 8;
      ellipse(x1 + (x2 - x1) * u, y1 + (y2 - y1) * u, r, r, color);
    }
  };

  const domeHalf = (y: number) => {
    const baseY = 158;
    const rx = 206;
    const ry = 150;
    const d = baseY - y;

    if (d > ry) return -1;

    const k = 1 - (d * d) / (ry * ry);
    if (k <= 0) return -1;

    return Math.floor(rx * Math.sqrt(k));
  };

  const drawStatic = () => {
    px(0, 0, VW, VH, C.out);

    // Igloo dome / white ice walls
    for (let y = 0; y < 153; y++) {
      const d = domeHalf(y);
      if (d < 0) continue;

      px(160 - d, y, d * 2 + 1, 1, C.ice1);

      if (y < 44) {
        px(160 - d, y, d * 2 + 1, 1, C.ice2);
      }

      px(160 - d, y, 4, 1, C.ice3);
      px(160 + d - 3, y, 4, 1, C.ice3);
    }

    // Ice block seams
    const seams = [148, 132, 116, 100, 84, 68, 54, 42, 32, 24, 17];

    for (const y of seams) {
      const d = domeHalf(y);
      if (d > 0) {
        px(160 - d, y, d * 2 + 1, 1, C.ice3);
        px(160 - d, y + 1, d * 2 + 1, 1, C.ice2);
      }
    }

    for (let band = 0; band < seams.length - 1; band++) {
      const y0 = seams[band + 1]!;
      const y1 = seams[band]!;
      const offsets = [-0.8, -0.55, -0.28, 0, 0.28, 0.55, 0.8];

      for (const offset of offsets) {
        for (let y = y0 + 3; y < y1 - 2; y += 2) {
          const d = domeHalf(y);
          if (d < 1) continue;

          const stagger = band % 2 ? 0.12 : 0;
          const x = 160 + (offset + stagger) * d;

          if (x > 160 - d + 2 && x < 160 + d - 2) {
            px(x, y, 1, 1, C.ice3);
          }
        }
      }
    }

    // Floor
    px(0, 150, VW, 30, C.floor);
    px(0, 150, VW, 2, C.ice4);

    for (let i = 0; i < 12; i++) {
      px(
        rnd(i + 10) * VW,
        154 + Math.floor(rnd(i + 20) * 22),
        10 + Math.floor(rnd(i + 30) * 24),
        1,
        C.floorD
      );
    }

    // Igloo entrance left
    for (let y = 106; y < 151; y++) {
      let hw = 24;

      if (y < 130) {
        const k = 1 - ((130 - y) * (130 - y)) / (24 * 24);
        hw = k > 0 ? Math.floor(24 * Math.sqrt(k)) : -1;
      }

      if (hw < 0) continue;

      px(48 - hw, y, hw * 2 + 1, 1, "#1A3546");
      px(48 - hw + 4, y, hw * 2 - 7, 1, "#102636");
    }

    px(28, 146, 42, 5, "#2E6F92");
    px(34, 148, 30, 3, "#63B6D8");

    // Left wall whiteboard
    px(92, 48, 58, 40, "#F7FCFE");
    px(92, 48, 58, 2, C.ice4);
    px(92, 86, 58, 2, C.ice4);
    px(92, 48, 2, 40, C.ice4);
    px(148, 48, 2, 40, C.ice4);

    px(98, 55, 26, 2, "#57B9DC");
    px(98, 60, 18, 2, "#57B9DC");
    px(98, 67, 14, 10, "#8FD9F0");
    px(120, 69, 12, 6, "#8FD9F0");
    px(98, 80, 34, 2, "#57B9DC");

    // Shelf
    px(100, 100, 46, 3, "#5E6870");
    px(104, 90, 6, 10, "#E76F73");
    px(111, 88, 5, 12, "#6FCF97");
    px(117, 92, 7, 8, "#F2C94C");
    px(126, 94, 4, 6, "#9B8CFF");

    // Light wire
    for (let i = 0; i <= 120; i++) {
      const u = i / 120;
      const x = 28 + u * 250;
      const y = 60 + u * (34 - 60) + Math.sin(Math.PI * u) * 16;

      px(x, y, 1, 1, "#7F9AB0");
    }

    // Desk
    px(178, 110, 142, 14, C.deskTop);
    px(178, 110, 142, 2, "#5B6E7E");
    px(178, 124, 142, 3, C.deskSide);
    px(178, 127, 142, 2, C.deskDark);
    px(182, 129, 7, 21, C.deskSide);
    px(302, 129, 7, 21, C.deskSide);
    px(178, 148, 142, 3, "#B4D2E4");

    // PC tower
    px(192, 126, 26, 24, "#161E26");
    px(195, 129, 20, 18, "#0C1520");
    px(192, 126, 26, 2, "#26333D");

    // Secondary monitor
    px(184, 58, 44, 46, C.bezel);
    px(187, 61, 38, 38, C.screen);
    px(202, 104, 6, 7, C.bezelL);
    px(194, 109, 22, 3, C.bezelL);

    // Main monitor
    px(226, 36, 90, 72, C.bezel);
    px(228, 38, 86, 68, C.bezelL);
    px(230, 40, 82, 64, C.screen);
    px(266, 108, 10, 5, C.bezelL);
    px(254, 111, 34, 3, C.bezelL);

    // Keyboard
    px(230, 113, 72, 9, "#1E2831");
    px(230, 113, 72, 2, "#3E4E5C");
    px(230, 120, 72, 2, "#141C24");

    for (let r = 0; r < 2; r++) {
      for (let i = 0; i < 17; i++) {
        px(233 + i * 4, 115 + r * 3, 2, 2, "#54697A");
      }
    }

    // Mouse
    ellipse(309, 118, 5, 3, "#2A3640");
    px(309, 116, 1, 3, "#5FD0E8");

    // Mug
    px(304, 98, 11, 11, "#EDF7FB");
    px(304, 98, 11, 2, "#CBDEE8");
    px(305, 102, 9, 2, "#5FD0E8");
    px(315, 101, 2, 5, "#EDF7FB");
    px(317, 102, 1, 3, "#EDF7FB");

    // Rubber duck
    px(216, 104, 7, 5, "#F2C94C");
    px(222, 103, 3, 2, "#F2C94C");
    px(224, 104, 2, 1, "#E07B39");
    px(219, 104, 1, 1, "#3A2A10");
  };

  const drawScreens = (time: number) => {
    // Main code screen
    px(230, 40, 82, 64, C.screen);
    px(230, 40, 82, 6, "#101E2C");
    px(232, 41, 20, 4, "#172C40");
    px(253, 41, 15, 4, "#0D1A26");
    px(269, 41, 12, 4, "#0D1A26");
    px(232, 41, 20, 1, "#7BE8FF");
    px(230, 46, 8, 52, "#0B1826");
    px(230, 98, 82, 6, "#0F3243");

    const lineRate = 0.85;
    const currentLine = Math.floor(time / lineRate) + 8;
    const progress = (time / lineRate) % 1;

    for (let k = 0; k < 9; k++) {
      const idx = currentLine - 8 + k;
      const line = CODE_LINES[((idx % CODE_LINES.length) + CODE_LINES.length) % CODE_LINES.length]!;
      const y = 48 + k * 5.6;

      px(232, y + 1, 3, 1, "#2C4A60");

      const partial = idx === currentLine;
      let remaining = partial
        ? Math.max(1, Math.round(Math.min(1, progress / 0.65) * line.total))
        : line.total;

      let x = 240 + line.indent;
      let cursorX = x;

      for (const token of line.tokens) {
        if (remaining <= 0) break;

        const use = Math.min(token.w, remaining);

        if (use > 0) {
          px(x, y, use, 3, token.c);
          cursorX = x + use;
        }

        x += token.w + 2;
        remaining -= token.w + 2;
      }

      if (partial && Math.floor(time * 2.8) % 2 === 0) {
        px(cursorX + 1, y - 1, 1, 5, "#9FF3FF");
      }
    }

    // Bottom status
    px(233, 100, 14, 2, "#7BE8FF");
    px(250, 100, 8, 2, "#A6E3A1");
    px(296, 100, 12, 2, "#4E7A8C");

    // Secondary terminal
    px(187, 61, 38, 38, C.screen);
    px(187, 61, 38, 4, "#12303F");
    px(189, 62, 6, 2, "#7BE8FF");

    for (let i = 0; i < 5; i++) {
      const w = 8 + Math.floor((Math.sin(time * 1.3 + i * 1.7) * 0.5 + 0.5) * 22);
      px(190, 68 + i * 5, w, 2, i % 2 ? "#A6E3A1" : "#4E7A8C");
    }

    for (let i = 0; i < 7; i++) {
      const h = 2 + Math.floor((Math.sin(time * 2.2 + i * 0.9) * 0.5 + 0.5) * 11);
      px(190 + i * 5, 96 - h, 3, h, "#7BE8FF");
    }

    // Tower glow
    const pulse = Math.sin(time * 2) * 0.5 + 0.5;
    px(195, 145, 20, 2, `rgba(90,220,255,${0.35 + pulse * 0.5})`);
    px(197, 131, 2, 12, `rgba(120,240,255,${0.25 + pulse * 0.4})`);
  };

  const headTurn = (time: number) => {
    const tt = time % CYCLE;

    const A = 3.0;
    const B = 3.42;
    const C2 = 4.72;
    const D = 5.18;

    if (tt < A) return 0;

    if (tt < B) {
      const u = (tt - A) / (B - A);
      return 1 - Math.pow(1 - u, 3);
    }

    if (tt < C2) return 1;

    if (tt < D) {
      return 1 - smooth((tt - C2) / (D - C2));
    }

    return 0;
  };

  const drawBear = (time: number, turn: number) => {
    const bob = Math.sin(time * 2.1) * 0.55;

    const bx = 266 + turn * 1.6;
    const by = 130 + bob;
    const typing = turn < 0.28;

    // Shadow / stool
    ellipse(bx, 157, 30, 5, "rgba(20,60,90,0.22)");
    ellipse(bx, 150, 20, 4, "#3B4B57");
    px(bx - 15, 150, 3, 7, "#31414C");
    px(bx + 12, 150, 3, 7, "#31414C");

    // Body: cyan bear fur with grey overalls
    ellipse(bx, by, 25, 22, C.furD);
    ellipsePart(bx, by, 24, 21, C.fur, -999, by + 4);
    ellipsePart(bx, by, 25, 22, C.overall, by - 4, 999);
    ellipsePart(bx, by, 25, 22, C.overallD, by + 13, 999);

    // Overall straps
    for (let i = 0; i < 17; i++) {
      const y = by - 21 + i;
      const o = Math.round(i * 0.16);

      px(bx - 15 + o, y, 5, 1, C.overallL);
      px(bx + 11 - o, y, 5, 1, C.overallL);
    }

    px(bx - 13, by - 5, 4, 3, C.metal);
    px(bx + 10, by - 5, 4, 3, C.metal);

    // Back pocket + pencil
    px(bx + 4, by + 3, 11, 9, C.overallD);
    px(bx + 4, by + 3, 11, 1, C.overallL);
    px(bx + 12, by, 2, 6, "#F2C94C");
    px(bx + 12, by - 2, 2, 2, "#E07B39");

    // Arms typing
    const tap = Math.floor(time * 8) % 2;
    const lpy = typing ? (tap ? 0 : 1) : -2;
    const rpy = typing ? (tap ? 1 : 0) : -2;

    limb(bx - 19, by - 8, 240, 118 + lpy, 5.6, C.furD);
    limb(bx + 19, by - 8, 296, 118 + rpy, 5.6, C.furD);

    ellipse(240, 118 + lpy, 6, 5, C.fur);
    ellipse(296, 118 + rpy, 6, 5, C.fur);

    px(237, 119 + lpy, 2, 2, C.furX);
    px(240, 119 + lpy, 2, 2, C.furX);
    px(295, 119 + rpy, 2, 2, C.furX);
    px(298, 119 + rpy, 2, 2, C.furX);

    // Neck
    px(bx - 8, by - 30, 16, 9, C.fur);
    px(bx - 8, by - 30, 2, 9, C.furD);
    px(bx + 6, by - 30, 2, 9, C.furD);

    // Head turning
    const hx = bx - 4.5 * turn;
    const hy = 88 + bob - 1.5 * turn;
    const earOffset = turn * 5;

    // Ears
    ellipse(hx - 12 + earOffset, hy - 13, 6, 5, C.furD);
    ellipse(hx - 12 + earOffset, hy - 13, 3, 2, C.furX);

    ellipse(hx + 12 + earOffset * 0.6, hy - 13, 6, 5, C.furD);
    ellipse(hx + 12 + earOffset * 0.6, hy - 13, 3, 2, C.furX);

    // Head back
    ellipse(hx, hy, 17, 15, C.furD);
    ellipse(hx, hy + 1, 16, 13, C.fur);
    ellipsePart(hx, hy - 2, 14, 12, C.furL, hy - 15, hy - 9);

    // Nape tufts
    px(hx - 3, hy + 9, 2, 3, C.furD);
    px(hx + 2, hy + 8, 2, 4, C.furD);
    px(hx - 8, hy + 7, 2, 3, C.furD);

    // Face fades in while glancing
    const faceAlpha = clamp((turn - 0.28) / 0.32, 0, 1);

    if (faceAlpha > 0) {
      g.save();
      g.globalAlpha = faceAlpha;

      const mx = hx - 14 - 2 * turn;
      const my = hy + 4;

      ellipse(mx, my, 7, 5, C.muzzle);
      px(mx - 8, my - 1, 4, 3, C.nose);
      px(mx - 7, my - 1, 1, 1, "#4B8EA3");
      px(mx - 5, my + 3, 5, 1, C.nose);
      px(mx - 1, my + 2, 1, 2, C.nose);

      const tt = time % CYCLE;
      const blink = (tt > 3.95 && tt < 4.06) || (tt > 4.42 && tt < 4.5);

      if (blink) {
        px(hx - 15, hy - 2, 3, 1, C.nose);
        px(hx - 6, hy - 2, 4, 1, C.nose);
      } else {
        px(hx - 15, hy - 4, 3, 4, C.nose);
        px(hx - 6, hy - 4, 4, 4, C.nose);
        px(hx - 15, hy - 4, 1, 1, "#EFFBFF");
        px(hx - 6, hy - 4, 1, 1, "#EFFBFF");
      }

      px(hx - 16, hy - 7, 4, 1, C.furX);
      px(hx - 7, hy - 7, 5, 1, C.furX);

      g.restore();
    }

    // Cyan rim light
    ellipseRim(hx, hy, 17, 15, "rgba(150,238,250,0.72)");
    ellipseRim(bx, by, 25, 22, "rgba(150,238,250,0.38)");
  };

  const drawFx = (time: number) => {
    // Twinkling string lights
    for (let i = 0; i < 11; i++) {
      const u = (i + 0.5) / 11;
      const x = 28 + u * 250;
      const y = 60 + u * (34 - 60) + Math.sin(Math.PI * u) * 16 + 2;
      const colors = ["#FFD166", "#7BE8FF", "#FF9BB0", "#A6E3A1"];
      const color = colors[i % colors.length]!;
      const twinkle = 0.55 + 0.45 * Math.sin(time * 3 + i * 1.3);

      g.save();
      g.globalAlpha = twinkle;
      px(x, y, 2, 2, color);
      g.globalAlpha = twinkle * 0.25;
      px(x - 1, y - 1, 4, 4, color);
      g.restore();
    }

    // Mug steam
    for (let i = 0; i < 3; i++) {
      const p = (time * 0.55 + i * 0.33) % 1;

      g.save();
      g.globalAlpha = (1 - p) * 0.55;
      px(309 + Math.sin(p * 7 + i) * 2, 97 - p * 14, 1, 2, "#DFF6FF");
      g.restore();
    }

    // Ice dust
    for (let i = 0; i < 22; i++) {
      const x = (rnd(i) * VW + time * (3 + rnd(i + 9) * 5)) % VW;
      const y = rnd(i + 31) * 150 + Math.sin(time * 0.7 + i) * 6;
      const alpha = 0.2 + 0.35 * Math.sin(time * 2 + i * 2.1);

      if (alpha > 0) {
        g.save();
        g.globalAlpha = alpha;
        px(x, y, 1, 1, "#EAF9FF");
        g.restore();
      }
    }
  };

  drawStatic();
  bgCtx.drawImage(scene, 0, 0);

  const vignette = g.createRadialGradient(200, 80, 40, 180, 90, 190);
  vignette.addColorStop(0, "rgba(0,0,0,0)");
  vignette.addColorStop(1, "rgba(3,12,20,0.55)");

  const screenGlow = g.createRadialGradient(272, 72, 6, 272, 72, 115);
  screenGlow.addColorStop(0, "rgba(70,195,240,0.30)");
  screenGlow.addColorStop(0.45, "rgba(45,150,205,0.11)");
  screenGlow.addColorStop(1, "rgba(0,0,0,0)");

  const blitToCanvas = () => {
    const cw = canvas.width;
    const ch = canvas.height;

    out.clearRect(0, 0, cw, ch);
    out.imageSmoothingEnabled = false;

    const scale = Math.max(cw / VW, ch / VH);
    const dw = Math.ceil(VW * scale);
    const dh = Math.ceil(VH * scale);
    const dx = Math.floor((cw - dw) / 2);
    const dy = Math.floor((ch - dh) / 2);

    out.drawImage(scene, 0, 0, VW, VH, dx, dy, dw, dh);
  };

  const render = (time: number) => {
    g.drawImage(bg, 0, 0);

    drawScreens(time);

    g.save();
    g.globalCompositeOperation = "lighter";
    g.fillStyle = screenGlow;
    g.fillRect(140, 4, 180, 160);
    g.restore();

    drawBear(time, headTurn(time));
    drawFx(time);

    g.fillStyle = vignette;
    g.fillRect(0, 0, VW, VH);

    blitToCanvas();
  };

  let raf = 0;
  let time = 0;
  let last = performance.now();

  const reducedMotion =
    respectReducedMotion &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));

    out.imageSmoothingEnabled = false;
    render(reducedMotion ? 3.65 : time);
  };

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();

  const tick = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    time += dt * speed;
    render(time);

    raf = requestAnimationFrame(tick);
  };

  if (!reducedMotion) {
    raf = requestAnimationFrame(tick);
  }

  return () => {
    cancelAnimationFrame(raf);
    observer.disconnect();
  };
}

export default function PolarBearHeroBackground({
  className = "",
  speed = 1,
  respectReducedMotion = false,
}: PolarBearHeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    return mountPolarBearAnimation(
      canvasRef.current,
      speed,
      respectReducedMotion
    );
  }, [speed, respectReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{
        imageRendering: "pixelated",
      }}
    />
  );
}