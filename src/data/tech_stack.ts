export const techCategories = [
    "Frontend",
    "Backend",
    "Databases",
    "AI/ML",
    "Other" // Captures DevOps, Tools, Languages, etc.
] as const;

export type Category = typeof techCategories[number];

export type Tool = {
    name: string;
    color: "primary" | "secondary" | "tertiary";
    icon: string; // path from /public/icons/
    category: Category;
};

// ---------------- CATEGORIZED TOOLS ----------------
// We export these individually so the Bento Box UI can grab exactly what it needs for each card.
// In future if we want to use with category...

export const frontendTools: Tool[] = [
    {
        name: "Flutter",
        color: "primary", // Teal
        icon: "/icons/flutter.svg",
        category: "Frontend",
    },
    {
        name: "React",
        color: "secondary", // Purple
        icon: "/icons/react.svg",
        category: "Frontend",
    },
    {
        name: "Next.js",
        color: "primary",
        icon: "/icons/nextjs.svg",
        category: "Frontend",
    },
];

export const backendTools: Tool[] = [
    {
        name: "Node.js",
        color: "secondary",
        icon: "/icons/nodejs.svg",
        category: "Backend",
    },
    {
        name: "Firebase",
        color: "tertiary", // Orange
        icon: "/icons/firebase.svg",
        category: "Backend",
    },
    {
        name: "REST APIs",
        color: "primary",
        icon: "/icons/api.svg", // Or any generic server icon
        category: "Backend",
    },
];

export const databaseTools: Tool[] = [
    {
        name: "Supabase",
        color: "tertiary",
        icon: "/icons/supabase.svg",
        category: "Databases",
    },
    {
        name: "MongoDB",
        color: "primary",
        icon: "/icons/mongodb.svg",
        category: "Databases",
    },
    {
        name: "SQL",
        color: "secondary",
        icon: "/icons/sql.svg",
        category: "Databases",
    },
];

export const aiTools: Tool[] = [
    {
        name: "Python",
        color: "tertiary",
        icon: "/icons/python.svg",
        category: "AI/ML",
    },
    {
        name: "Pandas",
        color: "secondary",
        icon: "/icons/pandas.svg",
        category: "AI/ML",
    },
    {
        name: "TensorFlow",
        color: "primary",
        icon: "/icons/tensorflow.svg",
        category: "AI/ML",
    },
];

export const otherTools: Tool[] = [
    {
        name: "Docker Containers",
        color: "primary",
        icon: "/icons/docker.svg",
        category: "Other",
    },
    {
        name: "CI/CD Pipelines",
        color: "secondary",
        icon: "/icons/ci-cd.svg",
        category: "Other",
    },
    {
        name: "Git & Cloud Workflows",
        color: "tertiary",
        icon: "/icons/github.svg",
        category: "Other",
    },
    {
        name: "C++",
        color: "primary",
        icon: "/icons/cpp.svg",
        category: "Other",
    }
];

// All the tools
export const allTools: Tool[] = [
    ...frontendTools,
    ...backendTools,
    ...databaseTools,
    ...aiTools,
    ...otherTools
];

// ---------------- TYPES ----------------

export type MasteryTag = {
    name: string;
    color: "primary" | "secondary" | "tertiary";
};

export type MasteryCard = {
    title: string;
    titleColor: "primary" | "secondary" | "tertiary";
    description: string;
    tags: MasteryTag[];
    bgSvgPaths: string;
};

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
            { name: "NODE.JS", color: "tertiary" },
        ],
        bgSvgPaths:
            '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>',
    },
    {
        title: "Mobile Development",
        titleColor: "tertiary",
        description:
            "Crafting performant and beautiful mobile applications using Flutter. Experienced in cross-platform development, state management, and native integrations.",
        tags: [
            { name: "FLUTTER", color: "primary" },
            { name: "DART", color: "secondary" },
            { name: "BLOC", color: "tertiary" },
        ],
        bgSvgPaths:
            '<rect x="2" y="7" width="20" height="14" rx="2"></rect><line x1="12" y1="2" x2="12" y2="4"></line>',
    },
    {
        title: "AI & Data Systems",
        titleColor: "secondary",
        description:
            "Working with NLP, LLMs, and data-driven systems to build intelligent applications. Focused on automation, classification systems, and real-world ML use cases.",
        tags: [
            { name: "NLP", color: "secondary" },
            { name: "LLMs", color: "primary" },
            { name: "MACHINE LEARNING", color: "tertiary" },
        ],
        bgSvgPaths:
            '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
    },

];