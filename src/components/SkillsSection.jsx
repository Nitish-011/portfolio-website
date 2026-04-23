import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Languages
  { name: "Python", category: "languages" },
  { name: "Java", category: "languages" },
  { name: "SQL", category: "languages" },
  { name: "JavaScript", category: "languages" },
  { name: "C/C++", category: "languages" },

  // AI & Data Science
  { name: "Machine Learning", category: "ai & data" },
  { name: "Pandas", category: "ai & data" },
  { name: "NumPy", category: "ai & data" },
  { name: "Scikit-Learn", category: "ai & data" },
  { name: "Data Analysis", category: "ai & data" },

  // Web Development (Combining Front/Back for a cleaner Data Science profile)
  { name: "React.js", category: "web dev" },
  { name: "HTML & CSS", category: "web dev" },
  { name: "Tailwind CSS", category: "web dev" },
  { name: "Node.js", category: "web dev" },
  { name: "REST APIs", category: "web dev" },

  // Databases
  { name: "MySQL", category: "databases" },
  { name: "PostgreSQL", category: "databases" },
  { name: "MongoDB", category: "databases" },

  // Tools & OS
  { name: "Linux", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Jupyter Notebook", category: "tools" },
  { name: "Docker", category: "tools" },
];

const categories = [
  "all",
  "languages",
  "ai & data",
  "web dev",
  "databases",
  "tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") {
      return true;
    }
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => {
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 rounded-lg shadow-sm card-hover flex items-center justify-center border border-transparent hover:border-primary/20 transition-all"
            >
              <h3 className="font-semibold text-base md:text-lg text-center text-slate-900 dark:text-slate-100">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};