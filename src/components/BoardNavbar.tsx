"use client";
import React from "react";
import Link from "next/link";
import { useAppContext } from "@/context/ContextProvider";
import { Color } from "@/models/colors";
export default function BoardNavbar() {
    const { setThemeColor } = useAppContext();
    return (
        <nav className="px-[5vw] py-6 flex justify-between items-center">
            <Link href="/">← Back</Link>
            <div className="flex gap-3">
                <button
                    className=" bg-theme-yellow border border-black h-6 w-6 rounded-full"
                    onClick={() => {
                        setThemeColor(Color.themeYellow);
                    }}
                ></button>
                <button
                    onClick={() => {
                        setThemeColor(Color.themeRed);
                    }}
                    className=" bg-theme-orange border border-black h-6 w-6 rounded-full"
                ></button>
                <button
                    onClick={() => {
                        setThemeColor(Color.themeDark);
                    }}
                    className=" bg-theme-black border border-black h-6 w-6 rounded-full"
                ></button>
            </div>
        </nav>
    );
}
