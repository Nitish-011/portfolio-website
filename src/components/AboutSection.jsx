import { Code, Database, Brain } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Aspiring Data Scientist & Software Developer</h3>
                        <p className="text-muted-foreground">
                            I am a Computer Science student at Dev Bhoomi Uttarakhand University with a strong technical foundation in Python, React, SQL, and Linux environments. Currently, I am expanding my expertise through a dedicated Data Science course, diving deep into Artificial Intelligence and Machine Learning.
                        </p>
                        <p className="text-muted-foreground">
                            I am passionate about leveraging data to solve complex problems, optimizing backend databases, and building intelligent, efficient software systems. I am eager to apply my analytical skills to real-world engineering challenges.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <a href="#contact" className="cosmic-button px-6 py-2 rounded-full text-center">
                                Get In Touch
                            </a>
                            <a href="/resume.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Software & Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Building dynamic user interfaces with React, alongside robust backend scripting and data processing with Python.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Database className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Database Management</h4>
                                    <p className="text-muted-foreground">
                                        Designing structured databases, managing data pipelines, and writing complex queries using SQL.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                                    <p className="text-muted-foreground">
                                        Exploring data science methodologies, predictive modeling, and intelligent algorithms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};