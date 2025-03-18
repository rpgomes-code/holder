"use client";

import { createContext, useContext, useState } from "react";
import type { FIREResult } from "@/types/stonks/tools/calculators/fire";

interface FIREResultsContextType {
    fireResults: FIREResult[];
    setFIREResults: (results: FIREResult[]) => void;
}

const FIREResultsContext = createContext<FIREResultsContextType>({
    fireResults: [],
    setFIREResults: () => {},
});

export function FIREResultsProvider({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    const [fireResults, setFIREResults] = useState<FIREResult[]>([]);

    return (
        <FIREResultsContext.Provider value={{ fireResults, setFIREResults }}>
            {children}
        </FIREResultsContext.Provider>
    );
}

export function useFIREResults() {
    const context = useContext(FIREResultsContext);
    if (!context) {
        throw new Error("useFIREResults must be used within a FIREResultsProvider");
    }
    return context;
}