import { CodeBlock } from "@/components/CodeBlock";

export default function CliDocs() {
    return (
        <div>
            <div className="doc-header">
                <h1 className="doc-title">VCursor CLI</h1>
                <p className="doc-lead">
                    The command-line interface is the fastest way to interact with VCursor.
                    Generate videos, manage configuration, and troubleshoot issues directly from your terminal.
                </p>
            </div>

            <section className="doc-section">
                <h2>Installation</h2>
                <CodeBlock language="bash" code="curl -fsSL https://cli.vcursor.com/install.sh | bash" />
                <p className="mt-4">
                    The installer automatically detects your operating system (macOS, Linux, Windows w/ WSL) and installs necessary dependencies.
                </p>
            </section>

            <section className="doc-section">
                <h2>Authentication</h2>
                <p>Log in with your API key to access paid features and higher rate limits.</p>
                <CodeBlock language="bash" code="vcursor login" />
                <p className="text-sm text-secondary mt-2">
                    <strong>Note:</strong> You can also set the <code>VCURSOR_API_KEY</code> environment variable for CI/CD environments.
                </p>
            </section>

            <section className="doc-section">
                <h2>Common Usage</h2>
                <p>The CLI uses smart detection to handle inputs. Simply pass text, files, or URLs in any order.</p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">T</div>
                        <h3 className="feature-title">Text to Video</h3>
                        <p className="feature-desc">Generate videos from detailed text descriptions.</p>
                        <CodeBlock language="bash" code='vcursor "cinematic drone shot"' wrap={true} />
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">I</div>
                        <h3 className="feature-title">Image to Video</h3>
                        <p className="feature-desc">Bring static images to life with motion.</p>
                        <CodeBlock language="bash" code='vcursor ./image.jpg "animate water"' wrap={true} />
                    </div>

                    <div className="feature-card" style={{ gridColumn: '1 / -1' }}>
                        <div className="feature-icon">A</div>
                        <h3 className="feature-title">Agent Mode</h3>
                        <p className="feature-desc">
                            Use "Agent Mode" for complex, multi-step tasks. The agent will plan, generate assets (images, audio), and edit them together into a final video.
                        </p>
                        <CodeBlock language="bash" code='vcursor --agent "create a 30s coffee commercial"' />
                    </div>
                </div>
            </section>

            <section className="doc-section">
                <h2>Command Reference</h2>
                <p className="mb-8 text-[hsl(var(--muted-foreground))]">
                    Comprehensive guide to all available flags and options.
                </p>

                <div className="space-y-8">
                    {/* Core & Workflow */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
                            Core & Workflow
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CommandCard
                                flag="--agent"
                                desc="Use autonomous agent mode for complex tasks like video editing."
                                example='--agent "make a modal"'
                            />
                            <CommandCard
                                flag="--plan"
                                desc="Preview the execution plan without running it."
                                example='--plan "my prompt"'
                            />
                            <CommandCard
                                flag="--ask"
                                desc="Chat with VCursor about technical questions or help."
                                example='--ask "how do I animate?"'
                            />
                            <CommandCard
                                flag="--mode <name>"
                                desc="Force a specific generation mode (e.g., text2video, image2video)."
                                example='--mode image2video'
                            />
                            <CommandCard
                                flag="-o, --output"
                                desc="Specify the output file path."
                                example='-o ./result.mp4'
                            />
                            <CommandCard
                                flag="--open"
                                desc="Automatically open the file after generation."
                                example='--open'
                            />
                            <CommandCard
                                flag="--json"
                                desc="Output results in JSON format for scripting."
                                example='--json'
                            />
                        </div>
                    </div>

                    {/* Video Settings */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
                            Video Settings
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CommandCard
                                flag="--duration"
                                desc="Target duration for the video."
                                example='--duration "5s"'
                            />
                            <CommandCard
                                flag="--aspectRatio"
                                desc="Video aspect ratio."
                                example='--aspectRatio "16:9"'
                            />
                            <CommandCard
                                flag="--resolution"
                                desc="Output resolution."
                                example='--resolution "1080p"'
                            />
                            <CommandCard
                                flag="--model"
                                desc="Specific AI model to use."
                                example='--model "stable-video"'
                            />
                        </div>
                    </div>

                    {/* Audio & Style */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
                            Audio & Style
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <CommandCard
                                flag="--voiceover"
                                desc="Add AI voiceover text."
                                example='--voiceover "Hello world"'
                            />
                            <CommandCard
                                flag="--subtitles"
                                desc="Generate subtitles for the video."
                                example='--subtitles'
                            />
                            <CommandCard
                                flag="--bgm"
                                desc="Add background music description."
                                example='--bgm "upbeat lofi"'
                            />
                            <CommandCard
                                flag="--soundEffects"
                                desc="Add sound effects description."
                                example='--soundEffects "explosions"'
                            />
                            <CommandCard
                                flag="--visualStyle"
                                desc="Define a specific visual style."
                                example='--visualStyle "cyberpunk"'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function CommandCard({ flag, desc, example }: { flag: string, desc: string, example: string }) {
    return (
        <div className="p-4 rounded-lg bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-colors duration-200">
            <code className="text-sm font-bold text-[hsl(var(--primary))] bg-[hsla(var(--primary),0.1)] px-2 py-1 rounded">
                {flag}
            </code>
            <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                {desc}
            </p>
            <div className="mt-3 pt-3 border-t border-[hsla(var(--border),0.5)]">
                <span className="text-xs text-[hsl(var(--muted-foreground))] uppercase tracking-wider font-semibold">Ex:</span>
                <code className="ml-2 text-xs text-[hsl(var(--foreground))] font-mono opacity-80">
                    {example}
                </code>
            </div>
        </div>
    );
}
