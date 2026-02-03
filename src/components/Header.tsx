"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <header className={`navbar ${scrolled ? 'glass shadow-sm' : 'bg-transparent'}`}>
            <div className="container navbar-content">
                <Link href="/" className="logo text-gradient brand-mark">
                    <Image
                        src="/logo-submit-anything.png"
                        alt="VCursor Logo"
                        width={32}
                        height={32}
                        className="brand-logo brand-logo--square"
                    />
                    <span>VCursor</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="nav-links hidden-mobile">
                    <Link href="/docs/cli" className={`nav-link ${isActive('/docs/cli') ? 'active' : ''}`}>CLI</Link>
                    <Link href="/docs/python" className={`nav-link ${isActive('/docs/python') ? 'active' : ''}`}>Python</Link>
                    <Link href="/docs/js" className={`nav-link ${isActive('/docs/js') ? 'active' : ''}`}>Node.js</Link>
                    <Link href="/docs/go" className={`nav-link ${isActive('/docs/go') ? 'active' : ''}`}>Go</Link>
                    <a href="https://github.com/JThh/vcursor-docs" target="_blank" rel="noopener noreferrer" className="nav-link icon-link">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.185 1.065 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn visible-mobile"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
                    <nav className="mobile-nav-links">
                        <Link href="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/docs/cli" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>CLI</Link>
                        <Link href="/docs/python" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Python SDK</Link>
                        <Link href="/docs/js" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Node.js SDK</Link>
                        <Link href="/docs/go" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Go SDK</Link>
                        <a href="https://github.com/JThh/vcursor-docs" target="_blank" rel="noopener noreferrer" className="mobile-nav-link">GitHub</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
