"use client";

import { createContext, useContext, useState } from "react";
import type { ROICResult } from "@/types/stonks/tools/calculators/roic";

interface ROICResultsContextType {
    roicResults: ROICResult[];
    setROICResults: (results: ROICResult[]) => void;
}

const ROICResultsContext = createContext<ROICResultsContextType>({
    roicResults: [],
    setROICResults: () => {},
});

export function ROICResultsProvider({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    const [roicResults, setROICResults] = useState<ROICResult[]>([]);

    return (
        <ROICResultsContext.Provider value={{ roicResults, setROICResults }}>
            {children}
        </ROICResultsContext.Provider>
    );
}

export function useROICResults() {
    const context = useContext(ROICResultsContext);
    if (!context) {
        throw new Error("useROICResults must be used within a ROICResultsProvider");
    }
    return context;
}