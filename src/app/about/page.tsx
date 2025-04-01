import { Metadata } from "next";
import { SkillsSection } from "@/components/sections/skills-section";

export const metadata: Metadata = {
    title: "About | KOBAYASHI Naotaro",
    description: "Learn more about KOBAYASHI Naotaro, skills, and background.",
};

export default function AboutPage() {
    return (
        <div className="py-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            About Me
                        </h1>
                        <div className="space-y-4 text-lg">
                            <p>
                                Hello! I&apos;m KOBAYASHI Naotaro, a student
                                passionate about programming and technology.
                            </p>
                            <p>
                                I specialize in C, C++, and Python development,
                                with experience in both frontend and backend
                                technologies.
                            </p>
                            <p>
                                My goal is to create efficient, user-friendly
                                applications that solve real-world problems.
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-square rounded-full bg-muted flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-primary/20">
                            KN
                        </div>
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-6">Education</h2>
                    <div className="border rounded-lg p-6 bg-card">
                        <h3 className="text-xl font-semibold">Student</h3>
                        <p className="text-muted-foreground">
                            Currently focusing on computer science and software
                            development.
                        </p>
                    </div>
                </div>

                <SkillsSection />
            </div>
        </div>
    );
}
