import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <section className="h-[91vh] px-[5vw] flex items-center justify-center">
            <div className="flex items-center justify-between w-full">
                <div className="w-[30vw] flex flex-col gap-4">
                    <h2 className="text-[60px] font-black leading-[60px]">
                        Bring Ideas to Life!
                    </h2>
                    <span>
                        Say hello to Show'em, your ultimate solution for
                        crafting visually appealing and shareable readme files
                        that capture attention and communicate your ideas
                        effectively.
                    </span>
                    <Link
                        className="bg-black flex w-[60%] shadow-md justify-between items-center text-white p-8 py-4 rounded-full"
                        href="/whiteboard"
                    >
                        <span>Get Free trial</span>
                        <span>→</span>
                    </Link>
                </div>
                <Image
                    src="/Success.png"
                    height={600}
                    width={600}
                    alt="main Header"
                />
            </div>
        </section>
    );
}
