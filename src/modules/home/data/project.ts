
// Types:

export type ProjectTags = {
    name: string;
    color: "primary" | "secondary" | "tertiary";
};

export type ProjectType = {
    name: string;
    description: string;
    image: string;
    color: "primary" | "secondary" | "tertiary";
    link: string;
    github: string;
    tags: ProjectTags[];
};


// Data:
export const ProjectData: ProjectType[] = [
    {
        name: "prep.ai",
        description: "prep.ai is a web-based platform that enables users to create and interact with personalized AI agents for virtual meetings. It enhances interview preparation, brainstorming, and idea generation through real-time chat, voice interaction, and screen sharing, delivering an immersive and intelligent collaboration experience.",
        image: "/images/prep-ai.png",
        color: "primary",
        link: "https://prep-ai-peach.vercel.app/",
        tags: [
            {
                name: "Next.JS",
                color: "primary"
            },
            {
                name: "Postgres",
                color: "secondary"
            },
            {
                name: "Authentication",
                color: "tertiary"
            },
        ],
        github: "https://github.com/AdityaJandu/prep.ai"
    },
    {
        name: "DetectIt",
        description: "DetectIt is an AI-powered visual intelligence app that enables real-time object detection, math solving, and image generation from user inputs. It allows users to analyze images from their gallery or live camera, solve mathematical expressions instantly, and generate creative visuals using advanced AI models, all within a smooth and interactive interface powered by Rive animations.",
        image: "/images/detect-it.png",
        color: "secondary",
        link: "https://github.com/AdityaJandu/Detect_It",
        tags: [
            {
                name: "Python",
                color: "secondary"
            },
            {
                name: "Flutter",
                color: "primary"
            },
            {
                name: "TensorFlow",
                color: "tertiary"
            },
        ],
        github: "https://github.com/AdityaJandu/Detect_It"
    }, {
        name: "FinTrack",
        description: "FinTrack is a personal finance management application that helps users track expenses, manage budgets, and take on savings challenges. Built with Flutter and Firebase, it provides real-time data syncing, user authentication, and an intuitive interface for smarter financial decisions.",
        image: "/images/fintrack.png",
        color: "primary",
        link: "https://github.com/AdityaJandu/FinTrack",
        tags: [
            {
                name: "Flutter",
                color: "primary"
            },
            {
                name: "Firebase",
                color: "secondary"
            },
            {
                name: "Finance",
                color: "tertiary"
            },
        ],
        github: "https://github.com/AdityaJandu/FinTrack",
    },
    {
        name: "TalkSpace",
        description: "TalkSpace is a real-time chat application designed for seamless communication with features like instant messaging, user authentication, and scalable backend architecture. It focuses on delivering a smooth and responsive messaging experience across devices.",
        image: "/images/talkspace.png",
        color: "secondary",
        link: "https://github.com/AdityaJandu/TalkSpace",
        tags: [
            {
                name: "Flutter",
                color: "primary"
            },
            {
                name: "Firebase",
                color: "secondary"
            },
            {
                name: "Chat App",
                color: "tertiary"
            },
        ],
        github: "https://github.com/AdityaJandu/TalkSpace",
    },
    {
        name: "Caffiend",
        description: "Caffiend is a modern web application for discovering and exploring coffee experiences. It features a visually rich interface, curated listings, and smooth interactions, focusing on delivering an engaging user experience for coffee enthusiasts.",
        image: "/images/caffiend.png",
        color: "tertiary",
        link: "https://caffiend-aditya-jandu.netlify.app",
        tags: [
            {
                name: "React",
                color: "primary"
            },
            {
                name: "UI/UX",
                color: "secondary"
            },
            {
                name: "Firbase",
                color: "tertiary"
            },
        ],
        github: "https://github.com/AdityaJandu/caffiend",
    }
];
