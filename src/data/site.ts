import { Globe, Smartphone, Plug, Bot } from 'lucide-react'

export const COMPANY = {
  name: 'Excelsis Softworks',
  legalName: 'Excelsis Softworks – Tech Solutions Ltd',
  tagline: 'Engineering excellence for the digital age',
  email: 'hello@excelsissoftworks.com',
  phone: '+233 (545) 473-885',
  address: '1200 Market Street, Suite 800, San Francisco, CA 94102',
  founded: 2019,
}

export type ServiceLink = {
  slug: string
  title: string
  short: string
  icon: typeof Globe
  image: string
}

export const SERVICES: ServiceLink[] = [
  {
    slug: 'website-solutions',
    title: 'Website Solutions',
    short: 'High-performance websites, e-commerce platforms and content systems engineered to convert.',
    icon: Globe,
    image: '/images/web-solutions.jpg',
  },
  {
    slug: 'app-creation',
    title: 'App Creation',
    short: 'Native and cross-platform mobile applications that delight users on every device.',
    icon: Smartphone,
    image: '/images/app-creation.jpg',
  },
    {
    slug: 'it-integration',
    title: 'IT Solution Integration',
    short: 'Seamless integration with Salesforce, HubSpot, ERPs and the tools your business runs on.',
    icon: Plug,
    image: '/images/it-integration.jpg',
  },
  {
    slug: 'ai-agent-creation',
    title: 'AI Agent Creation',
    short: 'Custom AI agents and copilots that automate workflows and amplify your team.',
    icon: Bot,
    image: '/images/ai-agents.jpg',
  },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Excelsis rebuilt our customer portal in record time and our conversion rate jumped 38%. They feel like an extension of our own team.',
    name: 'Marcus Bellweather',
    role: 'VP of Digital',
    company: 'Northwind Logistics',
  },
  {
    quote:
      'The Salesforce integration they delivered eliminated three manual processes overnight. Our sales reps finally trust the data.',
    name: 'Priya Raman',
    role: 'Director of Revenue Operations',
    company: 'Lumen Health',
  },
  {
    quote:
      'Their AI agent now handles 70% of our tier-one support tickets with a satisfaction score higher than our human team. Remarkable.',
    name: 'David Okafor',
    role: 'Head of Customer Experience',
    company: 'Verdant Retail Group',
  },
  {
    quote:
      'From concept to App Store in twelve weeks. Excelsis understood our vision and shipped a product our users genuinely love.',
    name: 'Elena Vasquez',
    role: 'Founder & CEO',
    company: 'Trailmate',
  },
]

export type Executive = {
  name: string
  role: string
  bio: string
  initials: string
}

export const EXECUTIVES: Executive[] = [
  {
    name: 'Dr. Olaf Caldwell Avogo',
    role: 'Chief Executive Officer',
    bio: 'A decade scaling engineering orgs. Olaf founded Excelsis to bring enterprise-grade craft to growing companies.',
    initials: 'OA',
  },
  {
    name: 'Sofia Marchetti',
    role: 'Chief Technology Officer',
    bio: 'Cloud architect and former platform lead. Sofia owns our engineering standards and technology roadmap.',
    initials: 'SM',
  },
  {
    name: 'James Okoro',
    role: 'Chief Operating Officer',
    bio: 'Operations strategist who keeps delivery predictable. James runs our delivery, PMO and quality practices.',
    initials: 'JO',
  },
  {
    name: 'Mei Lin Tan',
    role: 'VP of AI Solutions',
    bio: 'ML researcher turned product builder. Mei leads our AI agent practice and applied research lab.',
    initials: 'MT',
  },
]

export type Stat = { value: string; label: string }

export const STATS: Stat[] = [
  { value: '60+', label: 'Projects delivered' },
  { value: '98%', label: 'Client retention' },
  { value: '15+', label: 'Engineers & experts' },
  { value: '5+', label: 'Years in business' },
]
