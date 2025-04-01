"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    imageUrl?: string;
};

const projects: Project[] = [
    {
        id: "taskflow",
        title: "Taskflow",
        description:
            "A task management service that organizes tasks by project and tracks progress.",
        technologies: [
            "Node.js",
            "Express",
            "JavaScript",
            "MongoDB",
            "HTML",
            "Bootstrap",
        ],
        githubUrl: "https://github.com/naok-000/taskflow",
        liveUrl: "https://taskflow-qoay.onrender.com/",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectsSection() {
    return (
        <section className="py-20">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My Projects
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Here are some of the projects I&apos;ve worked on.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <Button asChild size="lg">
                        <Link href="/portfolio">View All Projects</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            variants={item}
            className="group rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden flex flex-col h-full"
        >
            <div className="aspect-video relative bg-muted">
                {project.imageUrl ? (
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-muted-foreground/20">
                        {project.title.charAt(0)}
                    </div>
                )}
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4 mt-auto">
                    <Button asChild variant="outline" size="sm">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                        </a>
                    </Button>
                    {project.liveUrl && (
                        <Button asChild size="sm">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                            </a>
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectsSection;
