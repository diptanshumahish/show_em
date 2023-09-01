"use client";
import { Color } from "@/models/colors";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AppContextType {
    themeColor: Color;
    setThemeColor: React.Dispatch<React.SetStateAction<Color>>;
    actualColor: string;
    setActualColor: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an ContextProvider");
    }
    return context;
}

export function ContextProvider({ children }: { children: React.ReactNode }) {
    const [themeColor, setThemeColor] = useState<Color>(Color.themeYellow);
    const [actualColor, setActualColor] = useState<string>(getColor());

    useEffect(() => {
        setActualColor(getColor());
    }, [themeColor]);

    function getColor(): string {
        switch (themeColor) {
            case Color.themeYellow:
                return "#fdc003";
            case Color.themeRed:
                return "#ed464d";
            case Color.themeDark:
                return "#111";
            default:
                return "#fdc003"; // Default color
        }
    }

    return (
        <AppContext.Provider
            value={{ themeColor, setThemeColor, actualColor, setActualColor }}
        >
            {children}
        </AppContext.Provider>
    );
}
