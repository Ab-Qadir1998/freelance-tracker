export type ProjectStatus = "active" | "completed" | "on-hold";

export type ProjectsInterface = {
    id: string;
    clientId: string;
    title: string;
    description: string;
    status: ProjectStatus;
    deadline: string;
    budget: number;
    paid: number;
};

export const projectsData: ProjectsInterface[] = [
    {
        id: "p1",
        clientId: "1",
        title: "E-Commerce Platform Redesign",
        description: "Full UI/UX redesign and frontend rebuild for a Shopify store.",
        status: "active",
        deadline: "2026-03-30",
        budget: 5000,
        paid: 2500,
    },
    {
        id: "p2",
        clientId: "1",
        title: "REST API Integration",
        description: "Integrate third-party logistics and payment APIs into the backend.",
        status: "active",
        deadline: "2026-04-15",
        budget: 3000,
        paid: 0,
    },
    {
        id: "p3",
        clientId: "1",
        title: "Admin Dashboard",
        description: "Build internal admin panel for order and inventory management.",
        status: "on-hold",
        deadline: "2026-05-01",
        budget: 2500,
        paid: 1000,
    },
    {
        id: "p4",
        clientId: "2",
        title: "Brand Identity Kit",
        description: "Logo, color palette, typography system, and brand guidelines doc.",
        status: "completed",
        deadline: "2026-01-20",
        budget: 1500,
        paid: 1500,
    },
    {
        id: "p5",
        clientId: "2",
        title: "Landing Page Design",
        description: "High-converting SaaS landing page with animations.",
        status: "active",
        deadline: "2026-03-25",
        budget: 900,
        paid: 300,
    },
    {
        id: "p6",
        clientId: "3",
        title: "Mobile App MVP",
        description: "React Native MVP for a food delivery startup.",
        status: "active",
        deadline: "2026-04-10",
        budget: 6000,
        paid: 2000,
    },
    {
        id: "p7",
        clientId: "4",
        title: "SEO Audit & Strategy",
        description: "Full technical SEO audit and 3-month content strategy plan.",
        status: "completed",
        deadline: "2025-12-31",
        budget: 750,
        paid: 750,
    },
    {
        id: "p8",
        clientId: "5",
        title: "WordPress Website",
        description: "Build a multilingual corporate site on WordPress.",
        status: "active",
        deadline: "2026-03-28",
        budget: 2000,
        paid: 1000,
    },
    {
        id: "p9",
        clientId: "5",
        title: "Email Marketing Automation",
        description: "Set up Mailchimp campaigns and automated drip sequences.",
        status: "on-hold",
        deadline: "2026-04-30",
        budget: 800,
        paid: 0,
    },
    {
        id: "p10",
        clientId: "6",
        title: "Portfolio Website",
        description: "Personal portfolio site with CMS and contact forms.",
        status: "active",
        deadline: "2026-03-20",
        budget: 900,
        paid: 450,
    },
];
