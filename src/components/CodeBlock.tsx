"use client";

import React, { useState } from "react";
import { Highlight, themes, type Language } from "prism-react-renderer";

interface CodeBlockProps {
    language: string;
    code: string;
    filename?: string;
    wrap?: boolean;
}

export const CodeBlock = ({ language, code, filename, wrap = false }: CodeBlockProps) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <div className="code-block-wrapper rounded-xl overflow-hidden my-6 border border-[hsl(var(--border))] shadow-lg bg-[hsl(var(--card))] relative group transition-colors duration-200">
            <div className="code-header flex justify-between items-center bg-[hsla(var(--muted),0.5)] px-4 py-2 border-b border-[hsl(var(--border))] select-none">
                <div className="flex items-center gap-2">
                    {filename ? (
                        <span className="text-sm text-[hsl(var(--muted-foreground))] font-mono">{filename}</span>
                    ) : (
                        <span className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider font-bold">
                            {language}
                        </span>
                    )}
                </div>
                <button
                    onClick={copyToClipboard}
                    className="text-xs transition-all duration-200 px-2 py-1.5 rounded-md flex items-center gap-1.5 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsla(var(--foreground),0.1)]"
                    aria-label="Copy code to clipboard"
                >
                    {isCopied ? (
                        <>
                            <svg
                                viewBox="0 0 24 24"
                                width="14"
                                height="14"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-green-500"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="text-green-500 font-medium">Copied</span>
                        </>
                    ) : (
                        <>
                            <svg
                                viewBox="0 0 24 24"
                                width="14"
                                height="14"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            Copy
                        </>
                    )}
                </button>
            </div>
            <div className={`code-content relative transition-colors ${wrap ? '' : 'overflow-x-auto'}`}>
                <Highlight
                    theme={themes.vsDark}
                    code={code.trim()}
                    language={language as Language}
                >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre
                            className={`${className} p-4 text-sm font-mono leading-relaxed scrollbar-thin scrollbar-thumb-[hsl(var(--border))] scrollbar-track-transparent`}
                            style={{
                                ...style,
                                backgroundColor: "transparent",
                                margin: 0,
                                whiteSpace: wrap ? "pre-wrap" : "pre",
                                wordBreak: wrap ? "break-word" : "normal"
                            }}
                        >
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
};
