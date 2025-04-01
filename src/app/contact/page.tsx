import { Metadata } from "next";
import ContactForm from "@/components/sections/contact-form";

export const metadata: Metadata = {
    title: "Contact | KOBAYASHI Naotaro",
    description:
        "Get in touch with KOBAYASHI Naotaro for collaborations or inquiries.",
};

export default function ContactPage() {
    return (
        <div className="py-12">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to
                        contact me.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <span className="font-medium mr-2">
                                        GitHub:
                                    </span>
                                    <a
                                        href="https://github.com/naok-000"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        github.com/naok-000
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">
                                Let&apos;s Connect
                            </h2>
                            <p className="text-muted-foreground">
                                I&apos;m always open to discussing new projects,
                                creative ideas, or opportunities to be part of
                                your vision.
                            </p>
                        </div>
                    </div>

                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
