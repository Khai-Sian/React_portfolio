import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
    // Programming & Data Manipulation
    {name: "Python", level: 80, category: "Programming"},
    {name: "SQL", level: 65, category: "Programming"},
    {name: "R", level: 30, category: "Programming"},

    // Machine Learning & Deep Learning
    {name: "Scikit-learn", level: 75, category: "Machine Learning"},
    {name: "PyTorch", level: 70, category: "Machine Learning"},
    {name: "HuggingFace", level: 65, category: "Machine Learning"},

    // Generative AI & LLM Tooling
    {name: "LangChain", level: 60, category: "Generative AI"},
    {name: "Ollama", level: 70, category: "Generative AI"},
    {name: "Retrieval Augmented Generation", level: 60, category: "Generative AI"},

    // Data Visualisation
    {name: "Matplotlib", level: 75, category: "Data Visualisation"},
    {name: "Seaborn", level: 75, category: "Data Visualisation"},
    {name: "Power BI", level: 65, category: "Data Visualisation"},
    {name: "Tableau", level: 60, category: "Data Visualisation"},

    // Tools
    {name: "Docker", level: 50, category: "Tools"},
    {name: "Microsoft Excel", level: 80, category: "Tools"},
    {name: "Git/GitHub", level: 70, category: "Tools"},
    {name: "Figma", level: 60, category: "Tools"},
    {name: "VS Code", level: 80, category: "Tools"},

    // In Progress
    {name: "AWS", level: 15, category: "In Progress"},
    {name: "Apache Spark", level: 10, category: "In Progress"},

    // Annotated In Progress
    {name: "AWS (In Progress)", level: 15, category: "All"},
    {name: "Apache Spark (In Progress)", level: 10, category: "All"}
]

const categories = ["All", "Programming", "Machine Learning", "Generative AI", 
                    "Data Visualisation", "Tools", "In Progress"]

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("All")

    const filteredSkills = skills.filter((skill) => (activeCategory === "All" && skill.category !== "In Progress") || skill.category === activeCategory)

    return (
        <section 
            id="skills" 
            className="py-12 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                ? "bg-primary text-primary-foreground" 
                                : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key}
                            className="bg-card px-6 py-4 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rouned-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{width: skill.level + "%"}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}