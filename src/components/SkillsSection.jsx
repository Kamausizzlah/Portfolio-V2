import { useState } from "react"
import { cn } from "@/lib/utils"

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

const categories = ["all", "Frontend", "Backend", "DevOps", "Other"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory)
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)} 
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{width: skill.level + "%"}} 
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}