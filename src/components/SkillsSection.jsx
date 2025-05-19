const skills = [
    // Frontend
    {name: "HTML/CSS", level: 95, category: "Frontend"},
    {name: "React", level: 90, category: "Frontend"},
    {name: "Tailwind CSS", level: 90, category: "Frontend"},
    {name: "Next.js", level: 80, category: "Frontend"},

    // Backend
    {name: "Python", level: 95, category: "Backend"},
    {name: "Flask", level: 95, category: "Backend"},
    {name: "Django", level: 80, category: "Backend"},
    {name: "PostgreSQL", level: 70, category: "Backend"},

    // DevOps
    {name: "Docker", level: 70, category: "DevOps"},
    {name: "AWS EC2", level: 70, category: "DevOps"},
    {name: "Git/GitHub", level: 90, category: "DevOps"},
    {name: "CI/CD", level: 70, category: "DevOps"},

    // Other
    {name: "Networking", level: 80, category: "Other"},
    {name: "IT Support", level: 80, category: "Other"},
    {name: "Technical Writing", level: 80, category: "Other"},
]

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, key) => (
                        <div></div>
                    ))}
                </div>
            </div>
        </section>
    )
}