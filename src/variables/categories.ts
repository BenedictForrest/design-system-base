interface CategoryProps {
    id: string
    name: string
    parentCategoryId?: string
}

const categories: CategoryProps[] = [
    {
        id: "getting-started",
        name: "Getting Started",
    },
    {
        id: "14673-start-here",
        name: "Start Here",
        parentCategoryId: "getting-started",
    },
    {
        id: "14674-features",
        name: "Features",
        parentCategoryId: "14673-start-here",
    },
    {
        id: "terminology",
        name: "Terminology",
        parentCategoryId: "14673-start-here",
    },
    {
        id: "getting-the-most-out-of-elevio",
        name: "Getting the most out of Elevio",
        parentCategoryId: "14673-start-here",
    },
    {
        id: "trialling-elevio?",
        name: "Trialling Elevio?",
        parentCategoryId: "14673-start-here",
    },
    {
        id: "setting-things-up",
        name: "Setting Things Up",
        parentCategoryId: "getting-started",
    },
    {
        id: "content",
        name: "Content",
    },
    {
        id: "content-management",
        name: "Content Management",
        parentCategoryId: "content",
    },
    {
        id: "the-assistant-embeddable",
        name: "The Assistant (Embeddable)",
        parentCategoryId: "content",
    },
    {
        id: "elevio-chrome-extension",
        name: "Elevio Chrome Extension",
        parentCategoryId: "content",
    },
    {
        id: "the-visualizer-and-helpers",
        name: "The Visualizer and Helpers",
        parentCategoryId: "content",
    },
    {
        id: "embedding-help-elements",
        name: "Embedding Help Elements",
        parentCategoryId: "content",
    },
    {
        id: "admin",
        name: "Admin",
    },
    {
        id: "managing-your-workflow",
        name: "Managing your Workflow",
        parentCategoryId: "admin",
    },
    {
        id: "analytics-and-reporting",
        name: "Analytics & Reporting",
        parentCategoryId: "admin",
    },
    {
        id: "company-management",
        name: "Company Management",
        parentCategoryId: "admin",
    },
    {
        id: "general",
        name: "General",
    },
    {
        id: "your-account",
        name: "Your Account",
        parentCategoryId: "general",
    },
    {
        id: "troubleshooting",
        name: "Troubleshooting",
        parentCategoryId: "general",
    },
    {
        id: "miscellaneous",
        name: "Miscellaneous",
        parentCategoryId: "general",
    },
    {
        id: "privacy-and-security",
        name: "Privacy and Security",
        parentCategoryId: "general",
    },
    {
        id: "who-is-elevio-for",
        name: "Who is Elevio for?",
        parentCategoryId: "general",
    },
]

export default categories
