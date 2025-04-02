"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define the form schema with Zod
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);

        try {
            // In a real application, you would send this data to your backend
            console.log("Form submitted:", data);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Reset the form
            reset();

            // Show success message
            alert("Message sent successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-6 w-full max-w-md mx-auto px-4 md:px-6"
        >
            <div className="space-y-3">
                <label htmlFor="name" className="text-sm font-medium">
                    Name
                </label>
                <Input
                    id="name"
                    placeholder="Your name"
                    {...register("name")}
                    aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                    <p className="text-sm text-red-500">
                        {errors.name.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                    Email
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                    <p className="text-sm text-red-500">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                    Message
                </label>
                <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    {...register("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                    <p className="text-sm text-red-500">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                className="w-full md:w-48 justify-self-center mt-4"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}
