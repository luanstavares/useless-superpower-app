"use client"

import React, { useEffect, useState } from 'react'
import { TypographyH1, TypographyP } from './typography/typography';

type Superpower = {
    name: string;
    description: string;
};

export const SuperpowerForm = () => {
    const [data, setData] = useState<Superpower[]>([]);


    useEffect(() => {
        fetch("/api/Superpowers").then((res) => res.json()).then((data) => setData(data)).catch((error) => console.log(error));
    }, []);

    return (
        <div>
            {data ? data.map((superpower, key) => (
                <div key={key}>
                    <TypographyH1>{superpower.name}</TypographyH1>
                    <TypographyP>{superpower.description}</TypographyP>
                </div>
            )) : <div></div>}

        </div>
    )
}
