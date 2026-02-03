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
                <CodeBlock language="bash" code="$ vcursor login" />
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
                        <CodeBlock language="bash" code='$ vcursor "cinematic drone shot"' />
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">I</div>
                        <h3 className="feature-title">Image to Video</h3>
                        <p className="feature-desc">Bring static images to life with motion.</p>
                        <CodeBlock language="bash" code='$ vcursor ./image.jpg "animate water"' />
                    </div>

                    <div className="feature-card" style={{ gridColumn: '1 / -1' }}>
                        <div className="feature-icon">A</div>
                        <h3 className="feature-title">Agent Mode</h3>
                        <p className="feature-desc">
                            Use "Agent Mode" for complex, multi-step tasks. The agent will plan, generate assets (images, audio), and edit them together into a final video.
                        </p>
                        <CodeBlock language="bash" code='$ vcursor --agent "create a 30s coffee commercial"' />
                    </div>
                </div>
            </section>

            <section className="doc-section">
                <h2>Command Reference</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Flag</th>
                                <th>Description</th>
                                <th>Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code style={{ fontSize: '0.85em' }}>--agent</code></td>
                                <td>Use autonomous agent mode for complex tasks.</td>
                                <td><span style={{ opacity: 0.7 }}>--agent "make a modal"</span></td>
                            </tr>
                            <tr>
                                <td><code style={{ fontSize: '0.85em' }}>--mode &lt;name&gt;</code></td>
                                <td>Force a specific generation mode.</td>
                                <td><span style={{ opacity: 0.7 }}>--mode image2video</span></td>
                            </tr>
                            <tr>
                                <td><code style={{ fontSize: '0.85em' }}>--plan</code></td>
                                <td>Preview the execution plan without running it.</td>
                                <td><span style={{ opacity: 0.7 }}>--plan "my prompt"</span></td>
                            </tr>
                            <tr>
                                <td><code style={{ fontSize: '0.85em' }}>-o, --output</code></td>
                                <td>Specify the output file path.</td>
                                <td><span style={{ opacity: 0.7 }}>-o ./result.mp4</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
