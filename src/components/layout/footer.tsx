import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="w-full py-12 md:py-16 px-4 md:px-6 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold">
                            KOBAYASHI Naotaro
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Student passionate about programming and technology.
                        </p>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold">Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                href="/"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Home
                            </Link>
                            <Link
                                href="/portfolio"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/about"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold">Connect</h3>
                        <div className="flex space-x-6 ">
                            <a
                                href="https://github.com/naok-000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 flex flex-col items-center text-sm text-muted-foreground">
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} KOBAYASHI Naotaro. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
