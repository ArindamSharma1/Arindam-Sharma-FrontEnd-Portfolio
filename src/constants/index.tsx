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
        context: 'Threat Detection',
        image: '/projects/framer-portfolio.png',
        tech: ['Wazuh', 'ELK Stack', 'Python', 'Kibana'],
        description:
            'Built SOC using Wazuh + ELK. Collected logs from endpoints and detected brute-force attempts. Wrote custom alert rules to monitor suspicious activity.',
        outcome: 'Proves hands-on capability to deploy SIEM and investigate endpoint anomalies.',
        demo: '#',
    },
    {
        title: 'Network Security Lab',
        role: 'Network Engineer',
        context: 'Infrastructure Security',
        image: '/projects/jyc-juit.png',
        tech: ['Cisco Packet Tracer', 'VLANs', 'ACLs', 'TCP/IP'],
        description:
            'Designed a segmented network topology using VLANs. Configured strict ACLs to restrict lateral movement and tested attack paths to validate access restrictions.',
        outcome: 'Proves ability to design secure networks and configure firewall-like rules.',
        demo: '#',
    },
    {
        title: 'FolioGauge SaaS',
        role: 'Security Engineer',
        context: 'Access Control implementation',
        image: '/projects/Folio-Gauge.png',
        tech: ['Row Level Security', 'API Keys', 'Rate Limiting', 'RBAC'],
        description:
            'Implemented RBAC to prevent privilege escalation. Applied strict input validation, API key management, and Row Level Security to protect application data.',
        outcome: 'Proves understanding of secure application architecture and API protection.',
        demo: 'https://folio-gauge.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/FolioGauge',
    },
    {
        title: 'TGE Store',
        role: 'Web Security',
        context: 'Secure E-Commerce',
        image: '/projects/tge-store.png',
        tech: ['HTTP-Only Cookies', 'RBAC Middleware', 'Docker'],
        description:
            'Configured HTTP-only cookie sessions to eliminate XSS session theft risks. Added RBAC middleware and secured deployment via Docker containers.',
        outcome: 'Proves ability to secure production web environments and web sessions.',
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
            'Architected secure user authentication via OAuth2 and JWT. Implemented strict role validation middleware to enforce separation of duties.',
        outcome: 'Proves capability to implement secure identity management from scratch.',
        demo: 'https://learn-vista-xi.vercel.app/',
        repo: 'https://github.com/ArindamSharma1/learn-vista',
    },
];

export const EXPERIENCES = [
    {
        company: 'ApexPlanet Technologies',
        role: 'Security Intern',
        duration: 'June 2024 - July 2024',
        description: 'Worked on securing systems during API integrations. Applied rigorous input validation, rate limiting, and ensured OWASP Top 10 compliance across endpoints.',
        skills: ['Input Validation', 'OWASP Top 10', 'Rate Limiting', 'Secure APIs'],
    },
    {
        company: 'Technical Club JYC-JUIT',
        role: 'Backend Security',
        duration: 'Oct 2023 - Nov 2024',
        description: 'Hardened the university technical club platform backend. Implemented Role-Based Access Control (RBAC), enforced HTTP security headers, and mitigated basic injection risks.',
        skills: ['RBAC', 'Security Headers', 'HTTP Hardening', 'Node.js'],
    },
    {
        company: 'Freelance',
        role: 'Freelance Security Tester',
        duration: 'June 2021 - Present',
        description: 'Secured client web applications by auditing active systems. Implemented secure authentication flows, patched common vulnerabilities, and ensured session safety.',
        skills: ['Vulnerability Testing', 'Secure Auth', 'Session Safety'],
    },
];

export const SKILL_CATEGORIES = [
    {
        name: 'Security Tools',
        techs: [
            { name: 'Burp Suite', icon: Shield },
            { name: 'Wireshark', icon: Activity },
            { name: 'Wazuh', icon: Lock },
            { name: 'Nmap', icon: Globe },
            { name: 'Nessus (Basic)', icon: Shield },
        ],
    },
    {
        name: 'SIEM & Detection',
        techs: [
            { name: 'ELK Stack', icon: Database },
            { name: 'Kibana', icon: Layout },
            { name: 'Log Analysis', icon: Terminal },
            { name: 'Alert Rules', icon: Zap },
        ],
    },
    {
        name: 'Core Concepts',
        techs: [
            { name: 'OWASP Top 10', icon: Shield },
            { name: 'RBAC', icon: Lock },
            { name: 'IDS/IPS', icon: Server },
            { name: 'JWT/OAuth2', icon: Code2 },
            { name: 'Threat Detection', icon: Layers },
        ],
    },
    {
        name: 'Networking',
        techs: [
            { name: 'TCP/IP', icon: Globe },
            { name: 'VLANs', icon: Server },
            { name: 'ACLs', icon: Lock },
            { name: 'Subnetting', icon: Cpu },
            { name: 'Packet Tracer', icon: Layout },
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
            { name: 'REST APIs', icon: Settings },
        ],
    },
];

export const SECURITY_PRACTICES = [
    {
        title: 'Kibana Dashboard',
        icon: <Activity className="w-6 h-6 text-txt-secondary" />,
        description: 'Custom dashboard created during SOC Lab setup to visualize authentication logs and flag brute-force attempts across endpoints.',
        bullets: ['Failed login tracking', 'Geo-location mapping', 'Anomaly alerting'],
        image: '',
        imagePlaceholder: 'Screenshot of Kibana Dashboard'
    },
    {
        title: 'Wazuh Active Response',
        icon: <Shield className="w-6 h-6 text-txt-secondary" />,
        description: 'Snippet of a custom Wazuh alert rule configured to trigger automatic blocks based on specific log patterns.',
        bullets: ['Rule definition', 'Log parsing', 'Automated IP blocking'],
        image: '',
        imagePlaceholder: 'Screenshot of Alert Rule XML'
    },
    {
        title: 'Network Topology',
        icon: <Server className="w-6 h-6 text-txt-secondary" />,
        description: 'Segmented network design illustrating VLAN separation and Access Control Lists governing lateral traffic.',
        bullets: ['VLAN separation', 'Router-on-a-stick', 'Strict ACLs'],
        image: '',
        imagePlaceholder: 'Diagram of Cisco Packet Tracer Setup'
    },
];

export const CONTACT_INFO = {
    email: 'sharmaarindam091@gmail.com',
    phone: '+91 8580705992',
    location: 'India',
};
