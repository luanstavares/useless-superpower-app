"use client"
import React, { useState } from 'react'
import { Button } from './button'
import { SelectSuperPower } from './select-superpower'
import { TypographyH1, TypographyP } from './typography'
import { Superpower } from '@/app/types/superpower'
import { getUselessSuperpower } from '@/actions/getGeneratedSuperpower'


export const SelectSuperpowerForm = () => {
    const [superPower, setSuperpower] = useState<Superpower>({
        name: "",
        description: "",
    });
    const [generatedUselessSuperPower, setGeneratedUselessSuperPower] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const uselessSuperpower = await getUselessSuperpower(superPower);
        if (!uselessSuperpower) {
            console.log("Error Generating Useless Power... Well I guess that is my useless power 😅");
        }
        console.log(uselessSuperpower.content);

        setGeneratedUselessSuperPower(uselessSuperpower.content);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="pt-40 flex flex-col justify-center items-center text-center">
                    <div className="py-5">
                        <TypographyH1>Select Superpower</TypographyH1>
                    </div>
                    <div className="py-10">
                        <SelectSuperPower
                            superPowerValue={superPower}
                            setSuperpowerValue={setSuperpower}
                        />
                    </div>

                    <Button type="submit" className="mt-18 cursor-pointer">
                        <TypographyP>Generate my useless superpower! 🦸🏼‍♂️</TypographyP>
                    </Button>
                </div>
            </form>


            {generatedUselessSuperPower && (
                <div className="mt-10 p-5 bg-primary rounded-lg">
                    <TypographyP>{generatedUselessSuperPower}</TypographyP>
                </div>
            )}
        </div>
    );
};
