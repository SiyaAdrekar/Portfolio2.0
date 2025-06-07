import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () =>{
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
               <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
                </h2> 

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6"> 
                       
                        <p className="text-muted-foreground">
                            Hello! My name is Siya Adrekar, an Indian-born and raised girl from Mumbai with a lifelong fascination for technology. 
                            Growing up, I was always drawn to the tech world, but it was through deeper academic exploration that I discovered my true
                            passion for software and innovation. I recently graduated in Spring 2024 with a Bachelor of Science in Computer Science, 
                            concentrating in Data Science, from California State University, Monterey Bay earning Magna Cum Laude honors with a 3.89 GPA. 
                            My academic experience was enriched with coursework in Software Design, Algorithms, Machine Learning, and more, providing a 
                            strong foundation in both theory and real-world application.
                        </p>

                        <p className="text-muted-foreground">
                            Outside of academics, I've brought ideas to life through a range of hands-on projects from developing machine learning models
                            to building full-stack applications deepening my passion for using code to solve real-world challenges. When I'm not coding, 
                            I love to unwind by dancing, which helps me stay energized and creative. Reading is another favorite pastime of mine, whether 
                            it's diving into thought provoking novels, exploring tech blogs, or learning about new developments in my field. 
                            I'm also an avid music enthusiast, always on the lookout for fresh sounds and genres to broaden my horizons and inspire new ideas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch    
                            </a> 

                            <a href="https://docs.google.com/document/d/1BNnEXFwRqGwvV75pcb2nBk_2iSk3j-rjTl9PhA0xQT4/edit?tab=t.0" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume    
                            </a> 
                        </div>
                    </div>
                   
                    {/* Photo section */}
                    <div className="flex justify-center md:justify-end">
                        <div className="relative">
                            <img 
                                src='public/siaa.png'
                                alt="Siya Adrekar - Web Developer & Machine Learning Engineer"
                                className="w-96 h-96 object-cover object-bottom rounded-2xl shadow-2xl"
                                style={{ objectPosition: '50% 70%' }}
                            />
                            {/* Optional: Add a decorative border or gradient overlay */}
                            <div className="absolute inset-0 rounded-2xl ring-4 ring-primary/20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}