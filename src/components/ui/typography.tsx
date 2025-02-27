import { ReactNode } from "react";

interface TypographyProps {
    children: ReactNode;
    className?: string;
}

export function TypographyH1({ children, className = "" }: TypographyProps) {
    return (
        <h1 className={`scroll-m-20 font-extrabold lg:text-5xl md:text-5xl sm:text-4xl text-4xl ${className}`}>
            {children}
        </h1>
    );
}

export function TypographyH2({ children, className = "" }: TypographyProps) {
    return (
        <h2 className={`scroll-m-20 border-b pb-2 text-3xl sm:text-3xl font-semibold tracking-tight first:mt-0 ${className}`}>
            {children}
        </h2>
    );
}

export function TypographyH3({ children, className = "" }: TypographyProps) {
    return (
        <h3 className={`scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight ${className}`}>
            {children}
        </h3>
    );
}

export function TypographyH4({ children, className = "" }: TypographyProps) {
    return (
        <h4 className={`scroll-m-20 text-md md:text-xl font-semibold tracking-tight ${className}`}>
            {children}
        </h4>
    );
}


export function TypographyP({ children, className = "" }: TypographyProps) {
    return (
        <p className={`leading-7 not-first:mt-6 ${className}`}>
            {children}
        </p>
    );
}

export function TypographySpan({ children, className = "" }: TypographyProps) {
    return (
        <span className={`leading-7 ${className}`}>
            {children}
        </span>
    );
}

export function TypographyList({ children, className = "" }: TypographyProps) {
    return (
        <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`}>
            {children}
        </ul>
    );
}