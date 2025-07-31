import Link from "next/link";
import React from "react";

interface ButtonProps {
    text: string;
    link: string;
    p?: string;          // variante de style, ex: 'neon', 'primary', …
    textColor?: string;  // ex: '#f00' ou 'text-red-500'
}

export default function Button({
                                   text,
                                   link,
                                   p,
                                   textColor,
                               }: ButtonProps) {
    // classes de base + variante
    const baseClass = p ? `btn btn-${p}` : "btn";

    // si c'est une classe Tailwind (commence par 'text-'), on la colle dans className
    // sinon, on passe en style inline
    const isTailwindColor = textColor?.startsWith("text-");
    const className = isTailwindColor
        ? `${baseClass} ${textColor}`
        : baseClass;

    const style = !isTailwindColor && textColor
        ? { color: textColor }
        : undefined;

    return (
        <Link href={link} className={className} style={style}>
            {text}
        </Link>
    );
}
