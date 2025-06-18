import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-blue-50 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image 
                                src="/logo.png"
                                alt="logo"
                                width={150}
                                height={40}
                                className="h-8 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link 
                            href="/how-it-works" 
                            className="text-black hover:underline text-sm font-bold transition-colors duration-200"
                        >
                            How it works
                        </Link>
                        <Link 
                            href="/use-cases" 
                            className="text-black hover:underline text-sm font-bold transition-colors duration-200"
                        >
                            Use cases
                        </Link>
                        <Link 
                            href="/pricing" 
                            className="text-black hover:underline  text-sm font-bold transition-colors duration-200"
                        >
                            Pricing
                        </Link>
                        <Link 
                            href="/help" 
                            className="text-black hover:underline text-sm font-bold transition-colors duration-200"
                        >
                            Help
                        </Link>
                        <Link 
                            href="/careers" 
                            className="text-black hover:underline text-sm font-bold transition-colors duration-200"
                        >
                            Careers
                        </Link>
                    </div>

                    {/* Login & Signup Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link 
                            href="/login" 
                            className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
                        >
                            Log in
                        </Link>
                        <Link 
                            href="/signup" 
                            className="bg-black text-white px-4 py-2 rounded-3xl text-sm font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center gap-1"
                        >
                            Sign up
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 7v10M17 7H7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}