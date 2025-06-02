import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "La Malinche",
        description: "Full functional website designed for capstone project",
        tags: ["Flask", "MongoDB","HTML5","CSS3","JavaScript (ES6+)","Google Login","ReCaptcha","Full-Stack Development","Responsive Design","API Development"],
    },
    {
        id: 2,
        title: "Movie Genre Prediction Model",
        description: "Machine learning model to predict movie genres using NLP techniques",
        tags: ["Python", "RNNs", "Word2Vec", "GloVe", "Scikit-learn", "Neural Networks"],
    },
    {
        id: 3,
        title: "Library Management System App",
        description: "Android application for managing library operations with CRUD functionality",
        tags: ["Java","OOPs","Android Studio", "Room Database", "CRUD operations"],
    },
    {
        id: 4,
        title: "Banking Application",
        description: "Object-oriented banking system with core financial operations",
        tags: ["Java","OOPs","C++"],
    },
    {
        id: 5,
        title: "Car Crash Analysis Model",
        description: "Data analysis and machine learning model for car crash prediction",
        tags: ["Python","Matplotlib","Seaborn","Scikit-learn","Decision Tree"]
    },
    {
        id: 6,
        title: "Dog Shelter Data Analysis",
        description: "Statistical analysis and visualization of dog shelter data",
        tags: ["Python","Matplotlib","Seaborn","Scikit-learn"],
    },
]

export const ProjectSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const projectsPerPage = 3;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const nextProjects = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + projectsPerPage
        );
    };

    const prevProjects = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? Math.max(0, projects.length - projectsPerPage) : prevIndex - projectsPerPage
        );
    };

    const getCurrentProjects = () => {
        return projects.slice(currentIndex, currentIndex + projectsPerPage);
    };

    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-width-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                {/* Projects Carousel Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={prevProjects}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-gray-800 text-white hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
                        {getCurrentProjects().map((project) => (
                            <div key={project.id} className="group bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300 flex flex-col h-full">
                                {/* Project Title - Centered and Purple */}
                                <h3 className="text-xl font-bold mb-4 text-center text-purple-600 hover:text-purple-700 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                {/* Project Description */}
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed text-center flex-grow">
                                    {project.description}
                                </p>
                                
                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-2 mb-10 justify-center ">
                                    {project.tags.map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700 text-white border border-gray-600 hover:bg-primary/10 transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextProjects}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-gray-800 text-white hover:bg-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        disabled={currentIndex + projectsPerPage >= projects.length}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index * projectsPerPage)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                Math.floor(currentIndex / projectsPerPage) === index
                                    ? 'bg-purple-600 scale-125'
                                    : 'bg-gray-400 hover:bg-purple-400'
                            }`}
                        />
                    ))}
                </div>
                
                {/* GitHub Link */}
                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        href="https://github.com/SiyaAdrekar"
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}