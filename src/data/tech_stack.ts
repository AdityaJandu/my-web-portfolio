// ---------------- TYPES ----------------

export type Tool = {
    name: string;
    color: "primary" | "secondary" | "tertiary";
    icon: string; // path from /public
};

export type MasteryTag = {
    name: string;
    color: "primary" | "secondary" | "tertiary";
};

export type MasteryCard = {
    title: string;
    titleColor: "primary" | "secondary";
    description: string;
    tags: MasteryTag[];
    bgSvgPaths: string;
};

// ---------------- TOOLS ----------------

export const tools: Tool[] = [
    {
        name: "REACT",
        color: "primary",
        icon: "/icons/react.svg",
    },
    {
        name: "NEXT.JS",
        color: "secondary",
        icon: "/icons/nextjs.svg",
    },
    {
        name: "FLUTTER",
        color: "primary",
        icon: "/icons/flutter.svg",
    },
    {
        name: "NODE.JS",
        color: "secondary",
        icon: "/icons/nodejs.svg",
    },
    {
        name: "FIREBASE",
        color: "tertiary",
        icon: "/icons/firebase.svg",
    },
    {
        name: "MONGODB",
        color: "primary",
        icon: "/icons/mongodb.svg",
    },
    {
        name: "CPP",
        color: "secondary",
        icon: "/icons/cpp.svg",
    },
    {
        name: "PYTHON",
        color: "tertiary",
        icon: "/icons/python.svg",
    },
];

// ---------------- MASTERY CARDS ----------------

export const masteryCards: MasteryCard[] = [
    {
        title: "Full Stack Engineering",
        titleColor: "primary",
        description:
            "Building scalable, production-ready applications using modern web technologies. Experienced in frontend performance, backend APIs, and cloud-integrated systems.",
        tags: [
            { name: "NEXT.JS", color: "primary" },
            { name: "FIREBASE", color: "secondary" },
            { name: "SYSTEM DESIGN", color: "tertiary" },
        ],
        bgSvgPaths:
            '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>',
    },
    {
        title: "AI & Data Systems",
        titleColor: "secondary",
        description:
            "Working with NLP, LLMs, and data-driven systems to build intelligent applications. Focused on automation, classification systems, and real-world ML use cases.",
        tags: [
            { name: "NLP", color: "secondary" },
            { name: "LLMs", color: "primary" },
            { name: "DATA PIPELINES", color: "tertiary" },
        ],
        bgSvgPaths:
            '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
    },
    {
        title: "Mobile Development",
        titleColor: "primary",
        description:
            "Crafting performant and beautiful mobile applications using Flutter. Experienced in cross-platform development, state management, and native integrations.",
        tags: [
            { name: "FLUTTER", color: "primary" },
            { name: "DART", color: "secondary" },
            { name: "MOBILE UX", color: "tertiary" },
        ],
        bgSvgPaths:
            '<rect x="2" y="7" width="20" height="14" rx="2"></rect><line x1="12" y1="2" x2="12" y2="4"></line>',
    },
];