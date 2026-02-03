"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const sidebarLinks = [
    {
        title: 'Getting Started',
        items: [
            { href: '/docs/cli', label: 'CLI Installation & Usage' },
        ]
    },
    {
        title: 'SDKs',
        items: [
            { href: '/docs/python', label: 'Python SDK' },
            { href: '/docs/js', label: 'Node.js SDK' },
            { href: '/docs/go', label: 'Go SDK' },
        ]
    }
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="sidebar-toggle visible-mobile"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? 'Close Menu' : 'Menu'}
            </button>

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <nav>
                    {sidebarLinks.map((section) => (
                        <div key={section.title} className="sidebar-section">
                            <h3 className="sidebar-title">{section.title}</h3>
                            <ul>
                                {section.items.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`sidebar-link ${pathname === item.href ? 'active' : ''}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="sidebar-backdrop visible-mobile"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
