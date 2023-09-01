import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="p-6 px-[5vw] flex items-center justify-between ">
            <div className="flex gap-3 items-center">
                <Image
                    src="/trans.svg"
                    height={40}
                    width={40}
                    alt="main Logo"
                />
                <div className="leading-3">
                    <h1 className="font-bold text-md">Show'em</h1>
                    <span className="text-xs">Your Creative Board</span>
                </div>
            </div>
            <div className="flex gap-3 items-center">
                <Link href="/">Pricing</Link>
                <Link href="/">About</Link>
                <Link
                    href="/"
                    className="bg-theme-orange px-4 py-2 rounded-full font-semibold"
                >
                    Join
                </Link>
            </div>
        </nav>
    );
}
