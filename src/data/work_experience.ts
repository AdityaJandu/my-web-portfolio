
export type WorkExpType = {
    date: string;
    role: string;
    company: string;
    description: string;
    color: "primary" | "secondary" | "tertiary";
};

export const WorkExpData: WorkExpType[] = [
    {
        date: "Feb 2025 - Aug 2025",
        role: "Flutter Developer Intern",
        company: "Brother's Group",
        description: "Worked as a Flutter Developer Intern, building and optimizing cross-platform mobile applications with a focus on performance and user experience. Developed responsive UIs, integrated backend services (Firebase/APIs), and implemented real-time features while collaborating in an agile development environment.",
        color: "primary",
    },
    {
        date: "Aug 2025 - Sept 2025",
        role: "Machine Learning Intern",
        company: "Pratinik Infotech",
        description: "Worked as a Machine Learning Intern, developing and deploying intelligent models to solve real-world problems. Focused on data preprocessing, feature engineering, and building predictive models using Python and popular ML libraries, while optimizing performance and accuracy.",
        color: "secondary",
    },
]