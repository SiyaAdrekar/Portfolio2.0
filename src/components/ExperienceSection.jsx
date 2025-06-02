import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Nurbli",
        location: "USA",
        duration: "Jan 2024 – Present",
        type: "Full-time",
        achievements: [
            "Developed new features for the Nurbli app using Flask, HTML, CSS, and JavaScript, creating and testing over 20 new features.",
            "Built and maintained responsive UIs using Bootstrap, integrated secure AWS S3 storage with pre-signed URLs.",
            "Created robust unit tests and implemented SDLC practices, including debug mode and automated QA testing.",
            "Lead deployment of custom push notifications and multilingual support, increasing user engagement by 25%. Collaborated in an Agile team contributing to a backend system that connects Android and web platforms.",
            "Increased user engagement by 25% by implementing deep links, custom push notification, and multilingual support, adding languages like English, Spanish and Triqui."
        ],
        technologies: ["Flask", "HTML5", "CSS3", "JavaScript", "Bootstrap", "AWS S3", "Python", "Agile", "SDLC", "Unit Testing"]
    },
    {
        id: 2,
        title: "Jr. Software Developer",
        company: "Qodenext",
        location: "India",
        duration: "May 2023 - Aug 2023",
        type: "Internship",
        achievements: [
            "Optimized MS SQL Server operations to boost query performance by 25%.",
            "Resolved 50+ backend issues and improved systems uptime by 15% via efficient bug resolution and logging.",
            "Gained practical experience working across the software development life cycle (SDLC) and Agile teams."
        ],
        technologies: ["MS SQL Server", "Backend Development", "Database Optimization", "SDLC", "Agile", "Debugging"]
    }
];

export const ExperienceSection = () => {
    const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

    const handleCompanyClick = (experience) => {
        setSelectedExperience(experience);
    };

    return (
        <section id="experience" className="py-24 px-4 relative ">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Work <span className="text-purple-400">Experience</span>
                </h2>

                <div className="grid lg:grid-cols-12 gap-8 h-full">
                    {/* Left side - Company List */}
                    <div className="lg:col-span-4 space-y-4">
                        {experiences.map((experience) => (
                            <button
                                key={experience.id}
                                onClick={() => handleCompanyClick(experience)}
                                className={`w-full text-left p-6 rounded-lg transition-all duration-300 border-l-4 ${
                                    selectedExperience?.id === experience.id 
                                        ? 'bg-gray-800 border-purple-400 text-white' 
                                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-purple-400/50'
                                }`}
                            >
                                <h3 className="text-lg font-bold tracking-wide uppercase">
                                    {experience.company}
                                </h3>
                                <div className="mt-2 text-sm opacity-75">
                                    <div>{experience.title}</div>
                                    <div>{experience.duration}</div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right side - Experience Details */}
                    <div className="lg:col-span-8">
                        {selectedExperience && (
                            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 h-full">
                                {/* Header */}
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold mb-4 text-center">
                                        {selectedExperience.title} <span className="text-purple-400">@ {selectedExperience.company}</span>
                                    </h3>
                                    
                                    {/* Centered Timeline Information */}
                                    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm uppercase tracking-wide">
                                        <span>{selectedExperience.duration}</span>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            <span>{selectedExperience.location}</span>
                                        </div>
                                        <span>•</span>
                                        <span>{selectedExperience.type}</span>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="space-y-4 mb-8">
                                    {selectedExperience.achievements.map((achievement, achIndex) => (
                                        <div key={achIndex} className="flex items-start gap-3">
                                            <ChevronRight size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                                            <p className="text-gray-300 leading-relaxed">{achievement}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-lg font-semibold mb-4 text-gray-200">Technologies & Skills</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedExperience.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex} 
                                                className="px-4 py-2 text-sm font-medium rounded-md bg-gray-700 text-gray-300 border border-gray-600 hover:border-purple-400 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};