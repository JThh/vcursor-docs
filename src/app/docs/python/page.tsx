import { CodeBlock } from "@/components/CodeBlock";

export default function PythonDocs() {
    return (
        <div>
            <div className="doc-header">
                <h1 className="doc-title">Python SDK</h1>
                <p className="doc-lead">
                    The VCursor Python SDK offers a clean, idiomatic interface for
                    integrating video generation capabilities into your Python
                    applications.
                </p>
            </div>

            <section className="doc-section">
                <h2>Installation</h2>
                <CodeBlock language="bash" code="pip install vcursor-cli" />
            </section>

            <section className="doc-section">
                <h2>Quick Start</h2>
                <p>
                    Synchronous usage for simple scripts and straightforward integrations.
                </p>

                <CodeBlock
                    language="python"
                    filename="main.py"
                    code={`from vcursor import VCursor

client = VCursor(api_key="your_api_key")

# Submit a video generation task
resp = client.submit("a cat playing piano in a jazz club")
print(f"Task started: {resp.task_id}")

# Wait for completion with progress callback
result = client.wait_for_completion(
    resp.task_id,
    on_progress=lambda p: print(f"{p.data.progress}%")
)

print(f"Video URL: {result.data.products.url}")`}
                />
            </section>

            <section className="doc-section">
                <h2>Async Usage</h2>
                <p>
                    Use <code>VCursorAsync</code> for high-performance asyncio
                    applications such as FastAPI servers or Discord bots.
                </p>
                <CodeBlock
                    language="python"
                    filename="async_example.py"
                    code={`import asyncio
from vcursor import VCursorAsync

async def main():
    async with VCursorAsync(api_key="your_api_key") as client:
        resp = await client.submit("sunset timelapse over mountains")
        print(f"Task: {resp.task_id}")
        
        result = await client.wait_for_completion(resp.task_id)
        if result.data.status == "completed":
             print(result.data.products.url)

asyncio.run(main())`}
                />
            </section>

            <section className="doc-section">
                <h2>Agent Mode</h2>
                <p>Trigger complex workflows using the Agent API.</p>
                <CodeBlock
                    language="python"
                    filename="complex_task.py"
                    code={`# Submit a complex request that requires planning and assets
resp = client.submit_agent("Create a 15s social media ad for my sneakers")
task_id = resp.get("task_id")

# The agent takes care of the rest
result = client.wait_for_agent_completion(task_id)
print(f"Agent Output: {result.video_url}")`}
                />
            </section>

            <section className="doc-section">
                <h2>Concurrency Limiting</h2>
                <p>Check your current rate limits or throttle client-side requests.</p>
                <CodeBlock
                    language="python"
                    code={`# Check current rate limit status
status = client.check_concurrency("standard")
print(f"Standard: {status.summary['standard'].used}/{status.summary['standard'].limit}")

# Client-side limit (capped at server limit)
client = VCursor(api_key="your_api_key", max_concurrency=10)`}
                />
            </section>
        </div>
    );
}
