"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { SelectSuperPower } from "./select-superpower";
import {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    TypographySpan,
} from "./typography";
import { Superpower } from "@/app/types/superpower";
import { getUselessSuperpower } from "@/actions/getGeneratedSuperpower";
import { Skeleton } from "./skeleton";
import { Sparkles } from "lucide-react";

export const SelectSuperpowerForm = () => {
    const [superPower, setSuperpower] = useState<Superpower>({ name: "", description: "" });
    const [generatedUselessSuperPower, setGeneratedUselessSuperPower] = useState<Superpower | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const uselessSuperpower = await getUselessSuperpower(superPower);
            if (!uselessSuperpower) {
                console.log("Error Generating Useless Power... Well, I guess that is my useless power 😅");
            } else {
                setGeneratedUselessSuperPower(JSON.parse(uselessSuperpower.content));
            }
        } catch (error) {
            console.error("Failed to generate useless superpower:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const resetSuperpower = () => {
        setGeneratedUselessSuperPower(null);
        setIsLoading(false);
    };

    return (
        <div className="flex flex-col h-full justify-center items-center text-center">
            {isLoading ? (
                <LoadingState />
            ) : generatedUselessSuperPower ? (
                <GeneratedState superpower={generatedUselessSuperPower} reset={resetSuperpower} />
            ) : (
                <SelectionForm
                    superPower={superPower}
                    setSuperpower={setSuperpower}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    );
};

const SelectionForm = ({
    superPower,
    setSuperpower,
    handleSubmit,
}: {
    superPower: Superpower;
    setSuperpower: React.Dispatch<React.SetStateAction<Superpower>>;
    handleSubmit: (e: React.FormEvent) => void;
}) => (
    <form onSubmit={handleSubmit}>
        <div className="py-5">
            <TypographyH1>Select Superpower</TypographyH1>
        </div>
        <div className="py-10">
            <SelectSuperPower superPowerValue={superPower} setSuperpowerValue={setSuperpower} />
        </div>
        <Button size="sm" type="submit" className="mt-18 cursor-pointer">
            <TypographySpan>Generate My Useless Superpower</TypographySpan>
            <Sparkles className="text-violet-400 dark:text-violet-600" />
        </Button>
    </form>
);

const GeneratedState = ({ superpower, reset }: { superpower: Superpower; reset: () => void }) => (
    <div>
        <TypographyH2 className="mb-10 mx-5">Generated Useless Superpower</TypographyH2>
        <GeneratedPrompt superpower={superpower} />
        <Button onClick={reset} size="sm" className="mt-12">
            <TypographySpan>Try Another One! 🦸🏼‍♂️</TypographySpan>
        </Button>
    </div>
);

const LoadingState = () => (
    <div className="w-sm md:w-xl">
        <TypographyH2 className="mb-10 animate-pulse">Generating Useless Superpower...</TypographyH2>
        <LoadingGeneratedPrompt />
        <Button disabled size="sm" className="mt-12">
            <TypographySpan>Try Another One! 🦸🏼‍♂️</TypographySpan>
        </Button>
    </div>
);

const GeneratedPrompt = ({ superpower }: { superpower: Superpower }) => (
    <div className="max-w-xl w-full px-7 py-5">
        <div className="py-3">
            <TypographyH3>{superpower.name}</TypographyH3>
        </div>
        <div className="py-2">
            <TypographyH4>{superpower.description}</TypographyH4>
        </div>
    </div>
);

const LoadingGeneratedPrompt = () => (
    <div className="p-5 w-full md:w-xl rounded-md flex flex-col justify-between align-middle">
        <Skeleton className="w-full h-2 my-2 rounded animate-pulse" />
        <Skeleton className="w-full h-2 my-2 rounded animate-pulse" />
        <Skeleton className="w-full h-2 my-2 rounded animate-pulse" />
    </div>
);