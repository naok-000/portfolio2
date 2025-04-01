import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function Home() {
    return (
        <>
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
        </>
    );
}
