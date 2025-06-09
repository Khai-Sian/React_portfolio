import { cn } from "@/lib/utils";
import { BarChart3, BrainCircuit, PieChart } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-12 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Data Scientist & Tech Enthusiast</h3>

                        <p className="text-muted-foreground">
                            My core passion lies in data science, where I leverage machine learning, 
                            advanced analytics, and software development skills to translate complex 
                            information into clear, actionable insights. I excel at designing and 
                            building predictive models and crafting innovative data-driven solutions 
                            to solve intricate business challenges.

                        </p>

                        <p className="text-muted-foreground">
                            As a tech enthusiast, I'm driven to apply and explore cutting-edge tools to 
                            deliver impactful outcomes. This approach has led to achievements like 
                            significantly boosting model accuracy (e.g., RoBERTa by over 30%), 
                            engineering automated data pipelines that slash processing times from days 
                            to minutes, and developing visualizations that uncover millions in 
                            cost-saving opportunities.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a 
                                href="/Resume.pdf"
                                download="KhaiSian_CV.pdf"
                                className={cn(
                                "px-6 py-2 rounded-full border border-primary text-primary",
                                "hover:bg-primary/10 transition-colors duration-300"
                            )}>
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BarChart3 className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Data Analysis & Interpretation
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Proficient in dissecting complex datasets using Python (Pandas, NumPy) 
                                        and SQL to uncover trends, patterns, and actionable insights that 
                                        inform strategic decision-making.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BrainCircuit className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Machine Learning & Modeling
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Experienced in designing, building, and evaluating ML models 
                                        (from classical algorithms to deep learning with PyTorch/HuggingFace) 
                                        to create predictive solutions and automate complex tasks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <PieChart className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Data Visualization & Storytelling
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Skilled in transforming raw data into compelling visual 
                                        narratives using tools like Power BI, Matplotlib, and 
                                        Seaborn, making complex insights accessible and driving 
                                        informed action.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
