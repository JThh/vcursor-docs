import Link from 'next/link';
import { ReactNode } from 'react';

export default function DocsLayout({ children }: { children: ReactNode }) {
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

    return (
        <div className="main-layout bg-background">
            <header className="navbar glass">
                <div className="container navbar-content">
                    <Link href="/" className="logo text-gradient flex align-center gap-2">
                        <span>VCursor Docs</span>
                    </Link>
                    <nav className="nav-links">
                        <Link href="/" className="nav-link">Home</Link>
                        <Link href="https://vcursor.com" target="_blank" className="nav-link">App</Link>
                    </nav>
                </div>
            </header>

            <div className="docs-layout">
                <aside className="sidebar">
                    <nav>
                        {sidebarLinks.map((section) => (
                            <div key={section.title} className="sidebar-section">
                                <h3 className="sidebar-title">{section.title}</h3>
                                <ul>
                                    {section.items.map((item) => (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className="sidebar-link"
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

                <main className="docs-main">
                    <div className="doc-page">
                        {children}
                    </div>

                    <div className="doc-footer">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <Link href="https://github.com/wenextdev/nexty.dev">
                            Edit on GitHub
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}
