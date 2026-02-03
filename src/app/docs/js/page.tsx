export default function NodeDocs() {
  return (
    <div>
      <div className="doc-header">
        <h1 className="doc-title">Node.js Integration</h1>
        <p className="doc-lead">
          Execute VCursor commands directly from your Node.js applications using the CLI wrapper pattern.
        </p>
      </div>

      <section className="doc-section">
        <h2>Using child_process</h2>
        <p>
          The most reliable way to integrate VCursor into a Node.js workflow today is by spawning the CLI as a child process.
          This ensures you always have access to the latest generation modes and features.
        </p>

        <div className="code-block-wrapper">
          <div className="code-header">
            <span className="code-lang">vcursor_wrapper.ts</span>
          </div>
          <pre className="code-content">
            <code className="language-typescript">{`import { spawn } from 'child_process';

/**
 * Generates a video using the VCursor CLI
 * @param prompt The prompt to generate
 * @returns Promise resolving to the video URL
 */
function generateVideo(prompt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Spawn the process with JSON output enabled
    const process = spawn('vcursor', [prompt, '--json']);
    
    let output = '';
    
    process.stdout.on('data', (data) => {
      output += data.toString();
    });

    process.on('close', (code) => {
      if (code === 0) {
        try {
          const result = JSON.parse(output);
          resolve(result.data.products.url);
        } catch (e) {
          reject(new Error('Failed to parse output'));
        }
      } else {
        reject(new Error(\`CLI exited with code \${code}\`));
      }
    });
  });
}

// Usage Example
generateVideo("a futuristic city").then(url => {
    console.log("Video Ready:", url);
});`}</code>
          </pre>
        </div>
      </section>

      <section className="doc-section">
        <h2>Native SDK</h2>
        <div style={{ padding: '1.5rem', background: 'hsla(var(--primary), 0.05)', borderRadius: '0.75rem', border: '1px solid hsla(var(--primary), 0.2)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'hsl(var(--primary))' }}>Native Package Coming Soon</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'hsl(var(--muted-foreground))' }}>
            A native <code>@vcursor/client</code> package is currently in development.
            It will provide type-safe bindings for the VCursor API.
            For now, please use the CLI wrapper method above for maximum compatibility with all supported inputs.
          </p>
        </div>
      </section>
    </div>
  );
}
