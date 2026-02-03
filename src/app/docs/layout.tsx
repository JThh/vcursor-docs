import Link from 'next/link';
import { ReactNode } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function DocsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="main-layout bg-background">
            <Header />

            <div className="docs-layout">
                <Sidebar />

                <main className="docs-main">
                    <div className="doc-page">
                        {children}
                    </div>

                    <div className="doc-footer">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        <Link href="https://github.com/JThh/vcursor-docs">
                            Edit on GitHub
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}
