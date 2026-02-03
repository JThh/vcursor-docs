export default function GoDocs() {
	return (
		<div>
			<div className="doc-header">
				<h1 className="doc-title">Go Integration</h1>
				<p className="doc-lead">
					Orchestrate VCursor video generation from your high-performance Go services and microservices.
				</p>
			</div>

			<section className="doc-section">
				<h2>Using os/exec</h2>
				<p>
					The <code>os/exec</code> package provides a robust way to wrap the VCursor CLI.
					Use the <code>--json</code> flag to retrieve structured, machine-readable output.
				</p>

				<div className="code-block-wrapper">
					<div className="code-header">
						<span className="code-lang">main.go</span>
					</div>
					<pre className="code-content">
						<code className="language-go">{`package main

import (
	"encoding/json"
	"fmt"
	"os/exec"
)

// Response structure matches CLI --json output
type VCursorResponse struct {
	Code int \`json:"code"\`
	Data struct {
		Status   string \`json:"status"\`
		Products struct {
			URL string \`json:"url"\`
		} \`json:"products"\`
	} \`json:"data"\`
}

func GenerateVideo(prompt string) (string, error) {
	// Execute vcursor pointing to json output
	cmd := exec.Command("vcursor", prompt, "--json")
	output, err := cmd.Output()
	if err != nil {
		return "", fmt.Errorf("execution error: %v", err)
	}

	var resp VCursorResponse
	if err := json.Unmarshal(output, &resp); err != nil {
		return "", fmt.Errorf("parse error: %v", err)
	}

	if resp.Data.Status != "completed" {
		return "", fmt.Errorf("task failed or incomplete")
	}

	return resp.Data.Products.URL, nil
}

func main() {
	url, err := GenerateVideo("a calm ocean at sunset")
	if err != nil {
		panic(err)
	}
	fmt.Println("Video URL:", url)
}
`}</code>
					</pre>
				</div>
			</section>

			<section className="doc-section">
				<h2>Best Practices</h2>
				<div className="features-grid">
					<div className="feature-card">
						<h3 className="feature-title">Environment Variables</h3>
						<p className="feature-desc">
							Pass the API key via the process environment instead of hardcoding it.
						</p>
						<div style={{ marginTop: '0.5rem' }}>
							<code style={{ fontSize: '0.85em' }}>cmd.Env = append(os.Environ(), "VCURSOR_API_KEY=...")</code>
						</div>
					</div>
					<div className="feature-card">
						<h3 className="feature-title">Error Handling</h3>
						<p className="feature-desc">
							Always check both the command exit code and the JSON status field, as generation failures might return a clean exit code but a "failed" status in the data.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
