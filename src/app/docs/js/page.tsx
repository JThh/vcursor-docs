import { CodeBlock } from "@/components/CodeBlock";

export default function NodeDocs() {
  return (
    <div>
      <div className="doc-header">
        <h1 className="doc-title">Node.js / TypeScript SDK</h1>
        <p className="doc-lead">
          Generate videos from text, images, and URLs using the VCursor SDK for
          JavaScript and TypeScript.
        </p>
      </div>

      <section className="doc-section">
        <h2>Installation</h2>
        <CodeBlock language="bash" code="npm install vcursor-sdk" />
      </section>

      <section className="doc-section">
        <h2>Quick Start</h2>
        <p>
          Initialize the client and submit your first video generation task.
        </p>

        <CodeBlock
          language="typescript"
          filename="index.ts"
          code={`import { VCursor } from "vcursor-sdk";

const client = new VCursor({ apiKey: "your_api_key" });

// Submit a video generation task
const resp = await client.submit("a cat playing piano in a jazz club");

// Wait for completion with progress callback
const result = await client.waitForCompletion(resp.task_id!, {
  onProgress: (p) => console.log(\`\${p.data.progress}%\`),
});

console.log(result.data.products.url);`}
        />
      </section>

      <section className="doc-section">
        <h2>Agent Mode</h2>
        <p>
          For more complex requirements, use Agent Mode to let VCursor plan and execute multi-step video creation.
        </p>
        <CodeBlock
          language="typescript"
          filename="agent.ts"
          code={`const agent = await client.submitAgent(
  "create a 30s commercial for a coffee brand",
  { duration: "30s", aspect_ratio: "16:9" },
);

const result = await client.waitForAgentCompletion(agent.task_id, {
  onProgress: (p) => console.log(\`\${p.progress}% - \${p.current_stage}\`),
});

console.log(result.video_url);`}
        />
      </section>

      <section className="doc-section">
        <h2>Concurrency Limiting</h2>
        <p>Manage efficient usage of your API quota.</p>
        <CodeBlock
          language="typescript"
          code={`// Check current rate limit status
const status = await client.checkConcurrency("standard");
console.log(\`Used: \${status.used}/\${status.limit}\`);

// Client-side limit (capped at server limit)
const limited = new VCursor({ apiKey: "...", maxConcurrency: 10 });`}
        />
      </section>
    </div>
  );
}
