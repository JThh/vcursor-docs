import Link from 'next/link';

export default function Home() {
    return (
        <main className="main-layout">
            <header className="navbar glass">
                <div className="container navbar-content">
                    <div className="logo text-gradient">VCursor CLI</div>
                    <nav className="nav-links">
                        <Link href="/docs/cli" className="nav-link">CLI</Link>
                        <Link href="/docs/python" className="nav-link">Python</Link>
                        <Link href="/docs/js" className="nav-link">Node.js</Link>
                        <Link href="/docs/go" className="nav-link">Go</Link>
                    </nav>
                </div>
            </header>

            <section className="hero-section">
                <div className="hero-bg-glow" />

                <div className="hero-content animate-fade-in">
                    <div className="badge">
                        v1.0.12 is now available
                    </div>

                    <h1 className="hero-title">
                        VCursor <br />
                        <span className="text-gradient">Refined for Devs</span>
                    </h1>

                    <p className="hero-subtitle">
                        The ultimate command-line interface for generative video.
                    </p>

                    <div className="hero-actions">
                        <Link href="/docs/cli" className="btn btn-primary btn-lg">
                            Get Started
                        </Link>
                        <Link href="https://github.com/wenextdev/nexty.dev" target="_blank" className="btn btn-outline btn-lg">
                            View on GitHub
                        </Link>
                    </div>
                </div>

                <div className="terminal-wrapper animate-slide-up">
                    <div className="terminal-window">
                        <div className="terminal-header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="terminal-body">
                            <div className="cmd-line">
                                <span className="prompt">$</span>
                                <span className="cmd">vcursor "a futuristic city with flying cars"</span>
                            </div>
                            <div className="output dim">Initializing generation...</div>
                            <div className="output">Mode: <span className="blue">text2video</span></div>
                            <div className="output">Task: <span className="purple">8f7a9d...</span></div>
                            <div className="output flex-row">
                                <span className="green">[████████████████████]</span>
                                <span>100% Completed</span>
                            </div>
                            <div className="output flex-row">
                                <span className="dim">Video saved to</span>
                                <span className="file-link">./output.mp4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-brand">
                        <span className="brand-name">VCursor</span>
                        <p>© {new Date().getFullYear()} VCursor. All rights reserved.</p>
                    </div>
                    <div className="footer-links">
                        <Link href="#">Privacy</Link>
                        <Link href="#">Terms</Link>
                        <Link href="#">Twitter</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
