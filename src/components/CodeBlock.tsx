"use client";

import React, { useState } from "react";
import { Highlight, themes, type Language } from "prism-react-renderer";

interface CodeBlockProps {
    language: string;
    code: string;
    filename?: string;
}

export const CodeBlock = ({ language, code, filename }: CodeBlockProps) => {
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
        <div className="code-block-wrapper rounded-xl overflow-hidden my-6 border border-[#30363d] shadow-lg bg-[#0d1117] relative group">
            <div className="code-header flex justify-between items-center bg-[#161b22] px-4 py-2 border-b border-[#30363d] select-none">
                <div className="flex items-center gap-2">
                    {filename ? (
                        <span className="text-sm text-[#8b949e] font-mono">{filename}</span>
                    ) : (
                        <span className="text-xs text-[#8b949e] uppercase tracking-wider font-bold">
                            {language}
                        </span>
                    )}
                </div>
                <button
                    onClick={copyToClipboard}
                    className="text-xs font-medium text-[#c9d1d9] hover:text-white bg-[#21262d] hover:bg-[#30363d] transition-colors px-2 py-1 rounded border border-[#30363d] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 focus:opacity-100"
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
                            Copied!
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
            <div className="code-content relative">
                <Highlight
                    theme={themes.vsDark}
                    code={code.trim()}
                    language={language as Language}
                >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre
                            className={`${className} overflow-x-auto p-4 text-sm font-mono leading-relaxed`}
                            style={{ ...style, backgroundColor: "transparent", margin: 0 }}
                        >
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line, key: i })}>
                                    <span className="inline-block w-8 select-none text-[#484f58] text-right pr-4 text-xs opacity-50">
                                        {i + 1}
                                    </span>
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
