"use client"

import React, { useEffect, useState } from 'react'

import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { TypographyH4, TypographyList } from "@/components/ui/typography";
import { Superpower } from '@/app/types/superpower'

interface SelectSuperPowerProps {
    superPowerValue: Superpower;
    setSuperpowerValue: (value: Superpower) => void;
}

export function SelectSuperPower({ superPowerValue, setSuperpowerValue }: SelectSuperPowerProps) {
    const [open, setOpen] = useState(false)
    //const [superPower, setSuperpower] = useState<string>("")
    const [superpowers, setSuperpowers] = useState<Superpower[]>([])

    useEffect(() => {
        fetch("/api/Superpowers")
            .then((res) => res.json())
            .then((data) => {
                setSuperpowers(data)
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[500px] justify-between items-center"
                >
                    {superPowerValue.name
                        ? superpowers.find((superpower) => superpower.name === superPowerValue.name)?.name
                        : "Select superpower..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder="Search superpower..." className="h-9" />
                    <CommandList className="max-h-80 overflow-auto">
                        <CommandEmpty>No superpower found.</CommandEmpty>
                        <CommandGroup>
                            {superpowers.map((superpower, key) => (
                                <CommandItem
                                    key={key}
                                    value={superpower.name}
                                    onSelect={() => {
                                        setSuperpowerValue(superpower);
                                        setOpen(false);
                                    }}

                                >
                                    <TypographyH4>{superpower.name}</TypographyH4>
                                    <TypographyList>{superpower.description}</TypographyList>
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            superPowerValue.name === superpower.name ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}