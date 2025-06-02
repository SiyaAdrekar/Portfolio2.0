import { Linkedin, Mail, MapPin, Phone } from "lucide-react"

export const ContactSection = () =>{
    return(
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Get In <span className="text-primary"> Touch </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>
                
                <div className="flex justify-center items-center space-x-8">
                    <a 
                        href="mailto:siyaadrekar2002@gmail.com"
                        className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                        title="Send Email"
                    >
                        <Mail className="h-8 w-8 text-primary" />
                    </a>
                    
                    <a 
                        href="tel:+18313242860"
                        className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                        title="Call Phone"
                    >
                        <Phone className="h-8 w-8 text-primary" />
                    </a>
                    
                    <a 
                        href="https://maps.google.com/?q=San+Jose,+CA,+USA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                        title="View Location"
                    >
                        <MapPin className="h-8 w-8 text-primary" />
                    </a>
                    
                    <a 
                        href="https://www.linkedin.com/in/siya-adrekar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                        title="LinkedIn Profile"
                    >
                        <Linkedin className="h-8 w-8 text-primary" />
                    </a>
                </div>
            </div>
        </section>
    )
}