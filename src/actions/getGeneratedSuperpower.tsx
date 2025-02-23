"use server"

import { Superpower } from "@/app/types/superpower"



export async function getUselessSuperpower(superPower: Superpower) {

    const { name, description } = superPower

    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await fetch(`${baseUrl}/superpowers/generateUselessSuperpower`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, description }),
        });

        if (!response.ok) {
            console.log(response);
        }

        const data = await response.json();

        const uselessSuperPower = data.choices[0].message ? data.choices[0].message : null

        return uselessSuperPower


    } catch (error) {
        console.error("Fetch error:", error);
    }
}
