import {cn} from "@/lib/utils"
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Wikipedia Article Quality Classification",
        description: "This Deep Learning approach classifies Wikipedia article quality using an \
        LSTM on concatenated BERT embeddings and Random Forest-selected structural/readability features.",
        image: "/projects/rsz_wikipedia.png",
        tags: ["Python", "Machine Learning", "Deep Learning", "Text Embedding", "BERT model", "Long-Short-Term Memory (LSTM)"],
        githubUrl: "https://github.com/Khai-Sian/Dissertation",
    },
    {
        id: 2,
        title: "Pokémon Card Identification System",
        description: "This real-time Pokémon card identification system uses fine-tuned YOLO for \
        localization, rembg for isolation, extracts ORB features, queries a FAISS index for candidates, \
        and employs a Brute-Force matcher for precise final identification.",
        image: "/projects/Pokemon.png",
        tags: ["Python", "Deep Learning", "YOLO", "FAISS", "OpenCV", "Computer Vision", "Object Detection"],
        githubUrl: "#", // You might want to update this if you have a specific repo
    },
    {
        id: 3,
        title: "Telecom Customer Churn Prediction",
        description: "Developed a comprehensive telecom customer churn model using data preprocessing, \
        EDA, feature engineering, and various ML algorithms, with Logistic Regression and a Neural \
        Network achieving ~82.2% accuracy and identifying key churn drivers for targeted retention \
        strategies.",
        image: "/projects/Customer Churn.png",
        tags: ["Python", "Predictive Modelling", "Data Analysis", "Feature Engineering", "Machine Learning", "Deep Learning", "Classification"],
        githubUrl: "https://github.com/Khai-Sian/Customer-Churn", // Consider if this should be a different URL
    }
];

export const ProjectsSection = () =>{
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured<span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects. Each project below was carefully crafted with meticulous
                    attention to detail and a core focus on performance, delivering impactful data-driven
                    solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col" // Added flex flex-col here
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-start gap-2 mb-4 min-h-35">
                                        {project.tags.map((tag, tagKey) => ( // Changed key to tagKey to avoid conflict
                                            <span
                                                key={tagKey} // Use a unique key for tags
                                                className={cn(
                                                    "px-2 py-1 text-xs font-medium border rounded-full",
                                                    "bg-secondary text-secondary-foreground"
                                                )}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-semibold mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto pt-4">
                                    <div className="flex space-x-3">
                                        {project.id === 2
                                        ? (<Github color="grey" size={20} className="cursor-not-allowed"/>) 
                                        : (<a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={"text-foreground/80 hover:text-primary transition-colors duration-300"}
                                            >
                                                <Github size={20} />
                                            </a>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        rel="noopener noreferrer" 
                        href="https://github.com/Khai-Sian"
                    >
                        Check Out My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}