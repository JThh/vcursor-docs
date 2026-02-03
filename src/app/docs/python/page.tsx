export default function PythonDocs() {
    return (
        <div>
            <div className="doc-header">
                <h1 className="doc-title">Python SDK</h1>
                <p className="doc-lead">
                    The VCursor Python SDK offers a clean, idiomatic interface for integrating video generation capabilities into your Python applications.
                </p>
            </div>

            <section className="doc-section">
                <h2>Installation</h2>
                <div className="code-block-wrapper">
                    <div className="code-header">
                        <span className="code-lang">python</span>
                        <button className="copy-btn">Copy</button>
                    </div>
                    <pre className="code-content">
                        <code className="language-python">pip install vcursor</code>
                    </pre>
                </div>
            </section>

            <section className="doc-section">
                <h2>Quick Start</h2>
                <p>Synchronous usage for simple scripts and straightforward integrations.</p>

                <div className="code-block-wrapper">
                    <div className="code-header">
                        <span className="code-lang">main.py</span>
                    </div>
                    <pre className="code-content">
                        <code className="language-python">{`from vcursor import VCursor

client = VCursor(api_key="your_api_key")

# Simple generation
response = client.submit("A cyberpunk city at night, rain, neon lights")
task_id = response.task_id

print(f"Task started: {task_id}")

# Wait for completion
result = client.wait_for_completion(task_id)

print(f"Video URL: {result.data.products.url}")`}</code>
                    </pre>
                </div>
            </section>

            <section className="doc-section">
                <h2>Async Usage</h2>
                <p>
                    Use <code>VCursorAsync</code> for high-performance asyncio applications such as FastAPI servers or Discord bots.
                </p>
                <div className="code-block-wrapper">
                    <div className="code-header">
                        <span className="code-lang">async_example.py</span>
                    </div>
                    <pre className="code-content">
                        <code className="language-python">{`import asyncio
from vcursor import VCursorAsync

async def main():
    async with VCursorAsync() as client:
        resp = await client.submit("A peaceful zen garden")
        print(f"Task: {resp.task_id}")
        
        result = await client.wait_for_completion(resp.task_id)
        if result.data.status == "completed":
             print(result.data.products.url)

asyncio.run(main())`}</code>
                    </pre>
                </div>
            </section>

            <section className="doc-section">
                <h2>Agent Mode</h2>
                <p>Trigger complex workflows using the Agent API.</p>
                <div className="code-block-wrapper">
                    <div className="code-header">
                        <span className="code-lang">complex_task.py</span>
                    </div>
                    <pre className="code-content">
                        <code className="language-python">{`# Submit a complex request that requires planning and assets
resp = client.submit_agent("Create a 15s social media ad for my sneakers")
task_id = resp.get("task_id")

# The agent takes care of the rest
result = client.wait_for_agent_completion(task_id)
print(f"Agent Output: {result.video_url}")`}</code>
                    </pre>
                </div>
            </section>
        </div>
    );
}
