"use client"
import React, { useState } from 'react'
import { Button } from './button'
import { SelectSuperPower } from './select-superpower'
import {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    TypographySpan,
} from './typography'
import { Superpower } from '@/app/types/superpower'
import { getUselessSuperpower } from '@/actions/getGeneratedSuperpower'
import { Skeleton } from './skeleton'
import { Sparkles } from 'lucide-react'


export const SelectSuperpowerForm = () => {
    const [superPower, setSuperpower] = useState<Superpower>({
        name: "",
        description: "",
    });
    const [generatedUselessSuperPower, setGeneratedUselessSuperPower] = useState<Superpower>();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const uselessSuperpower = await getUselessSuperpower(superPower);
        if (!uselessSuperpower) {
            console.log("Error Generating Useless Power... Well I guess that is my useless power 😅");
        }

        const parsedContent: Superpower = JSON.parse(uselessSuperpower.content)

        setGeneratedUselessSuperPower(parsedContent);
        setIsLoading(false);
    };

    return (
        <div className='flex flex-col h-full justify-center items-center text-center'>
            {!isLoading && generatedUselessSuperPower ?
                (<div >
                    <TypographyH2 className='mb-10'>Generated Useless Superpower</TypographyH2>
                    <GeneratedPrompt generatedUselessSuperPower={generatedUselessSuperPower} />
                    <Button size={"sm"} className='mt-12' >
                        <TypographySpan >
                            Try Another One! 🦸🏼‍♂️
                        </TypographySpan></Button>
                </div>)

                : !isLoading && !generatedUselessSuperPower ? (<form onSubmit={handleSubmit}>
                    <div>
                        <div className="py-5">
                            <TypographyH1>Select Superpower</TypographyH1>
                        </div >
                        <div className="py-10">
                            <SelectSuperPower
                                superPowerValue={superPower}
                                setSuperpowerValue={setSuperpower}
                            />
                        </div>


                        <Button size={"sm"} type="submit" className="mt-18 cursor-pointer animate-out">
                            <TypographySpan >Generate My Useless Superpower</TypographySpan>
                            <Sparkles className='text-violet-400 dark:text-violet-600' />
                        </Button>
                    </div >
                </form >)
                    : (
                        <div >
                            <TypographyH2 className='mb-10 animate-pulse'>Generating Useless Superpower...</TypographyH2>
                            <LoadingGeneratedPrompt />
                            <Button disabled size={"sm"} className='mt-12' >
                                <TypographySpan >
                                    Try Another One! 🦸🏼‍♂️
                                </TypographySpan></Button>
                        </div>)
            }

        </div >
    );
};



export const GeneratedPrompt = ({ generatedUselessSuperPower }: { generatedUselessSuperPower: Superpower }) => {
    return (
        <div className="max-w-xl px-7 py-5 text-justify">
            <TypographyH3>{generatedUselessSuperPower.name}</TypographyH3>
            <TypographyH4>{generatedUselessSuperPower.description}</TypographyH4>
        </div>
    )
}


export const LoadingGeneratedPrompt = () => {
    return (
        <div className='p-5 rounded-md flex flex-col justify-between align-middle'>
            <Skeleton className=' w-xl h-1 my-2 py-1.5' />
            <Skeleton className=' w-xl h-1 my-2 py-1.5' />
            <Skeleton className=' w-xl h-1 my-2 py-1.5' />
        </div>
    )
}

