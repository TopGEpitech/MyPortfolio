"use client";
import { useEffect, useState } from "react";

export default function Roadmap() {
    const [html, setHtml] = useState("");
    const [password, setPassword] = useState("");
    const [authorized, setAuthorized] = useState(false);
    const [error, setError] = useState("");

    const correctPassword = "dev123"; // change this as needed

    useEffect(() => {
        if (authorized) {
            fetch("./roadmap.html")
                .then(res => res.text())
                .then(setHtml)
                .catch(console.error);
        }
    }, [authorized]);

    if (!authorized) {
        return (
            <div className="flex flex-col items-center justify-center h-screen px-4 text-center">
                <div className="max-w-sm w-full space-y-4">
                    <h2 className="text-2xl font-semibold">🔒 Enter Password</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        placeholder="Password"
                    />
                    <button
                        onClick={() => {
                            if (password === correctPassword) {
                                setAuthorized(true);
                            } else {
                                setError("Incorrect password");
                            }
                        }}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        View Roadmap
                    </button>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
            </div>
        );
    }

    return (
        <div
            className="p-4 max-w-4xl mx-auto"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
