"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Skill = {
    name: string;
    category: "Frontend" | "Backend" | "Other";
    level: number; // 1-5
};

const skills: Skill[] = [
    { name: "C", category: "Backend", level: 5 },
    { name: "C++", category: "Backend", level: 5 },
    { name: "Python", category: "Backend", level: 5 },
    { name: "HTML", category: "Frontend", level: 4 },
    { name: "CSS", category: "Frontend", level: 4 },
    { name: "JavaScript", category: "Frontend", level: 4 },
    { name: "React", category: "Frontend", level: 3 },
    { name: "Flutter", category: "Frontend", level: 3 },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function SkillsSection() {
    const frontendSkills = skills.filter(
        (skill) => skill.category === "Frontend"
    );
    const backendSkills = skills.filter(
        (skill) => skill.category === "Backend"
    );
    // const otherSkills = skills.filter((skill) => skill.category === "Other");

    return (
        // UI-CENTER: セクションの余白と中央揃えを調整
        <section className="py-20 bg-muted/50 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My Skills
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Here are some of the technologies and languages I work
                        with.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold">Frontend</h3>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {frontendSkills.map((skill) => (
                                <SkillBar key={skill.name} skill={skill} />
                            ))}
                        </motion.div>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold">Backend</h3>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            {backendSkills.map((skill) => (
                                <SkillBar key={skill.name} skill={skill} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SkillBar({ skill }: { skill: Skill }) {
    const percentage = (skill.level / 5) * 100;

    return (
        <motion.div variants={item} className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">
                    {skill.level}/5
                </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={cn(
                        "h-full rounded-full",
                        skill.category === "Frontend"
                            ? "bg-primary"
                            : "bg-primary"
                    )}
                />
            </div>
        </motion.div>
    );
}

export default SkillsSection;
