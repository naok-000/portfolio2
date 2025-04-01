import { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects-section";

export const metadata: Metadata = {
    title: "Portfolio | KOBAYASHI Naotaro",
    description: "Explore the projects created by KOBAYASHI Naotaro.",
};

export default function PortfolioPage() {
    return (
        <div className="py-12">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        My Portfolio
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A collection of projects I&apos;ve worked on.
                    </p>
                </div>
                <ProjectsSection />
            </div>
        </div>
    );
}
