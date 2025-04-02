"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/shared/theme-toggle";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
            <div className="w-full flex h-16 items-center justify-between px-4 md:px-6 mx-auto max-w-7xl">
                <Link
                    href="/"
                    className="flex items-center space-x-2 flex-shrink-0"
                >
                    <span className="text-xl font-bold">KOBAYASHI Naotaro</span>
                </Link>
                <nav className="hidden md:flex items-center justify-center space-x-8 flex-grow">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.path
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
