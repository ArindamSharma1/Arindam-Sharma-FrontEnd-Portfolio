import {
    Code2,
    Database,
    Server,
    Wrench,
    Zap,
    Layers,
    Package,
    Settings,
    Shield,
    Lock,
    Activity,
    Github,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Terminal,
    Cpu,
    Globe,
    Layout,
    Smartphone
} from 'lucide-react';

export const SOCIALS = [
    { icon: Github, href: 'https://www.github.com/ArindamSharma1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arindam-sharma-ab4712251/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/arindam._.sharma/', label: 'Instagram' },
];

export const HERO_STATS = [
    { end: 4, label: 'Years Experience' },
    { end: 15, label: 'Projects Shipped' },
    { end: 100, label: 'Code Quality %' },
];

export const PROJECTS = [
    {
        title: 'SOC Automation Lab',
        role: 'Security Analyst',
        context: 'Threat Detection & SIEM',
        image: '/projects/framer-portfolio.png',
        tech: ['Wazuh', 'ELK Stack', 'Python', 'Kibana'],
        description:
            'Built a complete SOC environment. Configured Wazuh SIEM and ELK Stack with Python alert parsers. Created Kibana dashboards to visualize brute-force attacks and network anomalies.',
        outcome: 'Automated threat detection and alert generation across multiple endpoints.',
        demo: '#',
        repo: '#',
    },
    {
        title: 'Network Security Lab',
        role: 'Network Engineer',
        context: 'Infrastructure Security',
        image: '/projects/jyc-juit.png',
        tech: ['Cisco Packet Tracer', 'VLANs', 'ACLs', 'TCP/IP'],
        description:
            'Designed secure network architectures using Cisco Packet Tracer. Configured VLAN segmentation and ACLs to prevent unauthorized access. Tested defenses through lateral movement simulation.',
        outcome: 'Hardened network topology against internal and external threats.',
        demo: '#',
    },
    {
        title: 'FolioGauge SaaS',
        role: 'Security Engineer',
        context: 'Secured SaaS platform',
        image: '/projects/Folio-Gauge.png',
        tech: ['Row Level Security', 'API Keys', 'Rate Limiting', 'RBAC'],
        description:
            'Developed a secure SaaS platform with tier-based access control. Implemented strict Row Level Security (RLS), API key management, and effective rate limiting to protect endpoints.',
        outcome: 'Secured user workflows and prevented API abuse.',
        demo: 'https://folio-gauge.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/FolioGauge',
    },
    {
        title: 'TGE Store',
        role: 'Security-Focused Developer',
        context: 'Secure E-Commerce',
        image: '/projects/tge-store.png',
        tech: ['HTTP-Only Cookies', 'RBAC Middleware', 'Docker'],
        description:
            'Secured a production-ready e-commerce platform. Implemented HTTP-only cookie sessions, RBAC middleware, and Docker for auditable and reproducible builds.',
        outcome: 'Delivered a secure shopping experience preventing common web vulnerabilities.',
        demo: 'https://tge-store.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/TGE_Store',
    },
    {
        title: 'Cloud LMS',
        role: 'Security Architect',
        context: '1st Prize Hackathon',
        image: '/projects/learn-vista.png',
        tech: ['RBAC', 'OAuth2', 'JWT', 'Secure APIs'],
        description:
            'Built a patent-selected Learning Management System for a hackathon. Architected secure user authentication, strict RBAC, and protected API routes.',
        outcome: 'Won 1st prize and achieved patent selection for secure architecture.',
        demo: 'https://learn-vista-xi.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/learn-vista',
    },
];

export const EXPERIENCES = [
    {
        company: 'ApexPlanet Technologies',
        role: 'Web Developer Intern',
        duration: 'June 2025 - July 2025',
        description: 'Secured API integrations and implemented rigorous input validation. Ensured OWASP Top 10 compliance across web modules and deployed strict rate limiting.',
        skills: ['Input Validation', 'OWASP Top 10', 'Rate Limiting', 'Secure APIs'],
    },
    {
        company: 'Technical Club JYC-JUIT',
        role: 'Web Developer',
        duration: 'Oct 2023 - Nov 2024',
        description: 'Built a secure backend for the university technical club platform. Implemented Role-Based Access Control (RBAC), configured security headers, and executed HTTP hardening.',
        skills: ['RBAC', 'Security Headers', 'HTTP Hardening', 'Node.js'],
    },
    {
        company: 'Freelance',
        role: 'Security-Focused Developer',
        duration: 'June 2021 - Present',
        description: 'Built and secured web applications for diverse clients. Tested systems for vulnerabilities and implemented secure authentication flows.',
        skills: ['System Design', 'Vulnerability Testing', 'Secure Auth'],
    },
];

export const TECH_CATEGORIES = [
    {
        name: 'Security Tools',
        techs: [
            { name: 'Burp Suite', icon: Shield },
            { name: 'Wireshark', icon: Activity },
            { name: 'Wazuh', icon: Lock },
            { name: 'Nmap', icon: Globe },
        ],
    },
    {
        name: 'SIEM & Detection',
        techs: [
            { name: 'ELK Stack', icon: Database },
            { name: 'Kibana', icon: Layout },
            { name: 'Log Analysis', icon: Terminal },
            { name: 'Alert Automation', icon: Zap },
        ],
    },
    {
        name: 'Core Concepts',
        techs: [
            { name: 'OWASP Top 10', icon: Shield },
            { name: 'RBAC', icon: Lock },
            { name: 'IDS/IPS', icon: Server },
            { name: 'JWT/OAuth2', icon: Code2 },
            { name: 'Threat Modeling', icon: Layers },
        ],
    },
    {
        name: 'Networking',
        techs: [
            { name: 'TCP/IP', icon: Globe },
            { name: 'VLANs', icon: Server },
            { name: 'ACLs', icon: Lock },
            { name: 'Packet Tracer', icon: Cpu },
        ],
    },
    {
        name: 'Scripting & Dev',
        techs: [
            { name: 'Python', icon: Terminal },
            { name: 'Bash', icon: Terminal },
            { name: 'Linux', icon: Settings },
            { name: 'Docker', icon: Package },
            { name: 'Node.js', icon: Server },
        ],
    },
];

export const SYSTEMS = [
    {
        title: 'Authentication & Identity',
        icon: <Shield className="w-6 h-6 text-txt-secondary" />,
        content: 'Engineered secure identity management using Supabase Auth and Google OAuth. Implemented rigid JWT session handling to maintain user integrity.',
    },
    {
        title: 'Access Control (RBAC)',
        icon: <Lock className="w-6 h-6 text-txt-secondary" />,
        content: 'Architected granular Row Level Security (RLS) policies. Enforced strict per-user scan limits and admin-only privileges to prevent resource abuse.',
    },
    {
        title: 'Scalable Architecture',
        icon: <Server className="w-6 h-6 text-txt-secondary" />,
        content: 'Designed decoupled microservices with protected endpoints. Separated frontend logic from backend processing to ensure scalable data orchestration.',
    },
    {
        title: 'Performance Governance',
        icon: <Activity className="w-6 h-6 text-txt-secondary" />,
        content: 'Implemented intelligent rate limiting and resource governing mechanisms. Built architecture to handle concurrent traffic spikes gracefully.',
    },
];

export const CONTACT_INFO = {
    email: 'sharmaarindam091@gmail.com',
    phone: '+91 8580705992',
    location: 'India',
};
