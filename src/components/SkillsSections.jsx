import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "Python", level: 95, category: "languages" },
  { name: "Java", level: 90, category: "languages" },
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "HTML/CSS", level: 95, category: "languages" },
  { name: "C/C++", level: 85, category: "languages" },
  { name: "SQL", level: 88, category: "languages" },
  { name: "PL/SQL", level: 80, category: "languages" },
  { name: "Bash", level: 75, category: "languages" },

  // Frameworks & Libraries
  { name: "React", level: 90, category: "frameworks" },
  { name: "Flask", level: 85, category: "frameworks" },
  { name: "TensorFlow", level: 88, category: "frameworks" },
  { name: "PyTorch", level: 85, category: "frameworks" },
  { name: "Keras", level: 88, category: "frameworks" },
  { name: "Scikit-Learn", level: 90, category: "frameworks" },
  { name: "Matplotlib", level: 85, category: "frameworks" },
  { name: "Seaborn", level: 85, category: "frameworks" },
  { name: "Bootstrap", level: 80, category: "frameworks" },
  { name: "Flutter", level: 75, category: "frameworks" },

  // Tools & Platforms
  { name: "Git & GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "Android Studio", level: 80, category: "tools" },
  { name: "IntelliJ", level: 85, category: "tools" },
  { name: "Anaconda", level: 90, category: "tools" },
  { name: "Jupyter Notebook", level: 95, category: "tools" },
  { name: "Tableau", level: 80, category: "tools" },
  { name: "Google Colab", level: 90, category: "tools" },
  { name: "Replit", level: 85, category: "tools" },

  // Database & Cloud
  { name: "MySQL", level: 85, category: "database" },
  { name: "MongoDB", level: 80, category: "database" },
  { name: "Room Database", level: 75, category: "database" },
  { name: "Amazon S3", level: 75, category: "database" },
  { name: "AWS", level: 80, category: "database" },
  { name: "Google Cloud Services", level: 78, category: "database" },
];

const categories = [
  { key: "languages", label: "Programming Languages" },
  { key: "frameworks", label: "Frameworks & Libraries" },
  { key: "tools", label: "Tools & Platforms" },
  { key: "database", label: "Database & Cloud" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-4 py-2 rounded-full transition-colors duration-300 text-sm font-medium",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `grow 1.5s ease-out ${index * 0.1}s both`
                    }}
                  />
                </div>
                <div className="text-right mt-2">
                  <span className="text-sm text-muted-foreground font-medium">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">8+</div>
            <div className="text-sm text-muted-foreground">Programming Languages</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Frameworks & Libraries</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Tools & Platforms</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">6+</div>
            <div className="text-sm text-muted-foreground">Database & Cloud</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grow {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
};