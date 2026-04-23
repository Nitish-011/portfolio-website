import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Jeevdhara Biodiversity Pipeline",
        description: "An AI-powered backend API built to assist in biodiversity conservation across Uttarakhand. It processes image uploads, utilizes Gemini and GPT-OSS models to classify native vs. invasive species, cross-references local forest jurisdictions, and features a dynamic gamified point system to encourage citizen reporting.",
        tech: ["Python", "FastAPI", "Gemini AI", "GPT-OSS", "Uvicorn"],
        github: "https://github.com/yourusername/jeevdhara",
        live: "#",
        // Beautiful forest placeholder image for the biodiversity theme
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1600&auto=format&fit=crop" 
    },
    {
        title: "SQL Hackathon Dashboard",
        description: "A comprehensive data analysis and storytelling dashboard built during a competitive hackathon. It utilizes advanced SQL queries to process large datasets and integrates with Power BI to render interactive visualizations and business insights.",
        tech: ["SQL", "Power BI", "Data Modeling", "Database Design"],
        github: "https://github.com/yourusername/sql-hackathon",
        live: "#",
        // Clean data analytics placeholder image
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" 
    }
];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                {/* Using a responsive grid layout for the project cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-slate-900/50 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm card-hover flex flex-col group">
                            
                            {/* Image Container with Hover Zoom */}
                            <div className="h-56 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            
                            {/* Card Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>
                                
                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-primary/10 text-primary">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                {/* Action Buttons */}
                                <div className="flex gap-6">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
                                        <Github className="w-5 h-5" /> View Code
                                    </a>
                                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
                                        <ExternalLink className="w-5 h-5" /> Live Demo
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;