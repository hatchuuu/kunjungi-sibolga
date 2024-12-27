"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import AuthButton from "./AuthButton";


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full top-0 left-0 z-50 bg-gradient-to-b from-blue-700 via-blue-700/40 to-transparent transition-all duration-300 ${isScrolled
                ? "  h-28"
                : "h-52"
                }`}
        >
            <div className="max-w-[83rem] mx-auto  h-full">
                <div className="flex items-start mt-10 justify-between w-full h-full">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-white">Kunjungi-Sibolga</Link>

                    {/* Navigation Links */}
                    <div className="flex gap-5 items-center">
                        <Link href="/" className="text-white text-lg">
                            Beranda
                        </Link>
                        <Link href="/wisata" className="text-white text-lg">
                            Daftar Pariwisata
                        </Link>
                        <Link href="/budaya" className="text-white text-lg">
                            Tradisi Budaya
                        </Link>
                        <Link href="/kuliner" className="text-white text-lg">
                            Kuliner
                        </Link>
                    </div>

                    <AuthButton/>
                    {/* <Link href={"/api/auth/signin"} className="px-4 py-2 bg-blue-800 hover:bg-blue-900 text-white rounded-lg"> Masuk </Link> */}
                </div>
            </div>
        </nav>
    );
}
