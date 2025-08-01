"use client"
import { useEffect, useState } from 'react';

export default function Roadmap() {
    const [html, setHtml] = useState('');

    useEffect(() => {
        fetch('./roadmap.html')
            .then(res => res.text())
            .then(setHtml)
            .catch(console.error);
    }, []);

    return (
        <div
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
