import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSections";
import { ProjectSection } from "../components/ProjectsSections";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";


export const Home = () => {
    return <div className="min-h-screen bg-bacground text-foreground overflow-x-hidden">

        {/*Theme toggole*/}
        <ThemeToggle/>

        {/*Background Effect*/}
        <StarBackground />


        {/*Navbar*/}
        <Navbar />

        {/*Main Content*/}
        <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>


        {/*Fotter*/}
        <Footer />



    </div>
};