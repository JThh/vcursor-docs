import Link from 'next/link';
import Header from '@/components/Header';

export const metadata = {
    title: 'Privacy Policy',
    description: 'How VCursor collects and uses your information.',
};

export default function PrivacyPage() {
    return (
        <main className="main-layout bg-[hsl(var(--background))] min-h-screen">
            <Header />
            <div className="container py-12 px-4 md:px-6">
                <div className="max-w-4xl mx-auto doc-page">
                    <h1 className="doc-title">Privacy Policy</h1>

                    <div className="doc-section">
                        <h2>Introduction</h2>
                        <p>
                            Welcome to VCursor. We are committed to
                            protecting your privacy and personal information. This Privacy
                            Policy aims to clearly explain how we collect, use, store, and
                            protect your personal information. By using our services,
                            website, or products, you agree to the practices described in
                            this Privacy Policy.
                        </p>
                    </div>

                    <div className="doc-section">
                        <h2>Information We Collect</h2>
                        <h3 className="text-xl font-semibold mb-2 mt-4">1. Information You Provide Directly</h3>
                        <p>When you use our services, we may collect:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4 text-[hsl(var(--muted-foreground))]">
                            <li><strong>Account Information</strong>: Name, email, and other registration details.</li>
                            <li><strong>Payment Information</strong>: Processed securely via Stripe (we do not store full card details).</li>
                            <li><strong>Contact Information</strong>: Communications via email or support channels.</li>
                            <li><strong>AI Service Input</strong>: Prompts, images, and other inputs used for generation.</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-2 mt-4">2. Anonymous Information</h3>
                        <p>We automatically collect:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-4 text-[hsl(var(--muted-foreground))]">
                            <li>Device info (IP, browser, OS).</li>
                            <li>Usage data (access times, pages viewed).</li>
                            <li>Cookies for essential functionality and analytics.</li>
                        </ul>
                    </div>

                    <div className="doc-section">
                        <h2>How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-2 text-[hsl(var(--muted-foreground))]">
                            <li><strong>Providing Services</strong>: Account management, core functionality, and support.</li>
                            <li><strong>Improving Services</strong>: Analyzing usage to optimize features and performance.</li>
                            <li><strong>Communication</strong>: Sending service updates and important notifications.</li>
                            <li><strong>Security</strong>: Preventing fraud and abuse.</li>
                            <li><strong>AI Improvement</strong>: De-identified data may be used to refine our models.</li>
                        </ul>
                    </div>

                    <div className="doc-section">
                        <h2>Data Storage and Security</h2>
                        <p>
                            We use industry-standard encryption (SSL/TLS) and secure providers (Stripe, Cloudflare) to protect your data.
                            However, no method of transmission over the Internet is 100% secure.
                        </p>
                    </div>

                    <div className="doc-section">
                        <h2>Contact Us</h2>
                        <p>
                            If you have questions about this policy, please contact us via our
                            <Link href="https://discord.gg/Npf6PVsCYz" className="text-[hsl(var(--primary))] hover:underline ml-1">
                                Discord community
                            </Link>.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-[hsl(var(--border))]">
                        <Link href="/" className="text-[hsl(var(--primary))] hover:underline">
                            &larr; Return to Home
                        </Link>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-brand">
                        <span className="brand-name">VCursor</span>
                        <p>© {new Date().getFullYear()} VCursor. All rights reserved.</p>
                    </div>
                    <div className="footer-links">
                        <Link href="/privacy">Privacy</Link>
                        <Link href="/terms">Terms</Link>
                        <Link href="https://discord.gg/Npf6PVsCYz" target="_blank">Discord</Link>
                        <Link href="/docs/cli">Docs</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
