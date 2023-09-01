"use client";
import BoardNavbar from "@/components/BoardNavbar";
import { useAppContext } from "@/context/ContextProvider";
import Tiptap from "@/tiptap/tiptap";
import React from "react";

export default function page() {
    const { actualColor } = useAppContext();
    return (
        <main style={{ backgroundColor: `${actualColor}`, minHeight: "100vh" }}>
            <BoardNavbar />
            <Tiptap />
        </main>
    );
}
