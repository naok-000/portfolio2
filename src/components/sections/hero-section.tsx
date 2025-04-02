"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        // UI-CENTER: セクションの余白と中央揃えを調整
        <section className="py-20 md:py-28 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            <span className="block">Hi, I&apos;m</span>
                            <span className="block text-primary">
                                KOBAYASHI Naotaro
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Student passionate about programming and technology.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg">
                                <Link href="/portfolio">
                                    View My Work
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/contact">Contact Me</Link>
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative aspect-square rounded-full bg-muted flex items-center justify-center overflow-hidden"
                    >
                        <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary/20">
                            KN
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
