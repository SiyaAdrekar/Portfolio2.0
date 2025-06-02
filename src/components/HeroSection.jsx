import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        >
            {/* Floating UFO */}
            <div className="absolute top-32 left-1/2 transform -translate-x-1/2 animate-float z-20">
                <div className="relative">
                    {/* UFO Body */}
                    <div className="w-16 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg animate-pulse">
                        {/* UFO Light beam */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-yellow-300/50 animate-pulse"></div>
                    </div>
                    {/* UFO Dome */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gradient-to-t from-gray-300 to-white rounded-full opacity-80"></div>
                    {/* UFO Lights */}
                    <div className="absolute top-1 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute top-1 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                </div>
            </div>

            {/* Floating Alien */}
            <div className="absolute top-40 right-20 animate-float-slow z-10">
                <div className="relative">
                    {/* Alien Head */}
                    <div className="w-12 h-16 bg-gradient-to-b from-green-300 to-green-500 rounded-full relative">
                        {/* Alien Eyes */}
                        <div className="absolute top-3 left-2 w-3 h-4 bg-black rounded-full"></div>
                        <div className="absolute top-3 right-2 w-3 h-4 bg-black rounded-full"></div>
                        {/* Eye shine */}
                        <div className="absolute top-3.5 left-2.5 w-1 h-1 bg-white rounded-full"></div>
                        <div className="absolute top-3.5 right-2.5 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    {/* Alien Body */}
                    <div className="w-8 h-12 bg-gradient-to-b from-green-400 to-green-600 rounded-full mx-auto -mt-2"></div>
                </div>
            </div>

            {/* Floating Spacecraft */}
            <div className="absolute top-60 left-16 animate-float-reverse z-10">
                <div className="relative">
                    {/* Rocket Body */}
                    <div className="w-6 h-16 bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-full rounded-b-lg">
                        {/* Rocket Window */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-200 rounded-full"></div>
                        {/* Rocket Fins */}
                        <div className="absolute bottom-0 -left-1 w-2 h-4 bg-red-500 transform rotate-12"></div>
                        <div className="absolute bottom-0 -right-1 w-2 h-4 bg-red-500 transform -rotate-12"></div>
                    </div>
                    {/* Rocket Flame */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-6 bg-gradient-to-b from-orange-400 to-red-500 rounded-b-full animate-pulse"></div>
                </div>
            </div>

            {/* Floating Planets */}
            <div className="absolute top-1/4 right-1/4 animate-spin-slow">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg"></div>
            </div>
            
            <div className="absolute bottom-1/3 left-1/4 animate-spin-reverse">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg"></div>
            </div>

            {/* Shooting Stars */}
            <div className="absolute top-20 left-1/3 animate-shooting-star">
                <div className="w-1 h-8 bg-gradient-to-b from-white to-transparent transform rotate-45"></div>
            </div>
            
            <div className="absolute top-1/3 right-1/3 animate-shooting-star-delayed">
                <div className="w-1 h-6 bg-gradient-to-b from-yellow-300 to-transparent transform rotate-45"></div>
            </div>

            {/* Spotlight effect on Siya */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-300/10 rounded-full blur-xl animate-pulse z-0"></div>

            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1 relative">
                            Siya
                            {/* Glowing dot above Siya */}
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Adrekar </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I engineer scalable software solutions and intelligent ML systems 
                        that solve real-world problems with clean code, data-driven insights,
                        and user-first design.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(-50%); }
                    50% { transform: translateY(-10px) translateX(-50%); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
                
                @keyframes float-reverse {
                    0%, 100% { transform: translateY(-5px); }
                    50% { transform: translateY(5px); }
                }
                
                @keyframes spin-slow {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes spin-reverse {
                    0% { transform: rotate(360deg); }
                    100% { transform: rotate(0deg); }
                }
                
                @keyframes shooting-star {
                    0% { opacity: 0; transform: translateX(-100px) translateY(-100px) rotate(45deg); }
                    50% { opacity: 1; }
                    100% { opacity: 0; transform: translateX(100px) translateY(100px) rotate(45deg); }
                }
                
                @keyframes shooting-star-delayed {
                    0%, 60% { opacity: 0; transform: translateX(-100px) translateY(-100px) rotate(45deg); }
                    80% { opacity: 1; }
                    100% { opacity: 0; transform: translateX(100px) translateY(100px) rotate(45deg); }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .animate-float-slow {
                    animation: float-slow 4s ease-in-out infinite;
                }
                
                .animate-float-reverse {
                    animation: float-reverse 3.5s ease-in-out infinite;
                }
                
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
                
                .animate-spin-reverse {
                    animation: spin-reverse 10s linear infinite;
                }
                
                .animate-shooting-star {
                    animation: shooting-star 4s ease-out infinite;
                }
                
                .animate-shooting-star-delayed {
                    animation: shooting-star-delayed 6s ease-out infinite;
                }
            `}</style>
        </section> 
    );
};