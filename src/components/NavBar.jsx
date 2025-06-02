import {cn} from "@/lib/utils";
import { Menu,X } from "lucide-react";
import { useEffect, useState } from "react";


const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Experience", href: "#experience"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

export const Navbar = () =>{
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            setIsScrolled(window.screenY > 10) 
        };

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll",handleScroll);
    }, []);
    
    return(
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className= "container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center"
                    href="#hero"
                    >
                    <span className="realtive z-10">
                        <span className="text-glow text-foreground"> Siya Adrekar </span> Portfolio
                    </span>
                </a>

                {/*  desktop version*/}

                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a
                        key={key}
                        href={item.href}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                        {item.name}
                        </a>
                    ))}
                 </div>

                 {/* moile version*/}

                    <button onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 text-foreground z-50"
                        arial-lable= {isMenuOpen ? "Close Menu" : "Open Menu"}
                        >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                    </button>

                  <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-autp" : "opacity-0 pointer-none"
                  )}>  
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            {item.name}
                            </a>
                        ))}
                    </div>
                 </div>

            </div>
                
        </nav>
    )
};