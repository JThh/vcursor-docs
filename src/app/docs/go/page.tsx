import { CodeBlock } from "@/components/CodeBlock";

export default function GoDocs() {
	return (
		<div>
			<div className="doc-header">
				<h1 className="doc-title">Go SDK</h1>
				<p className="doc-lead">
					Generate videos from text, images, and URLs using the VCursor SDK for
					Go.
				</p>
			</div>

			<section className="doc-section">
				<h2>Installation</h2>
				<CodeBlock language="bash" code="go get github.com/JThh/vcursor/go/vcursor" />
			</section>

			<section className="doc-section">
				<h2>Quick Start</h2>
				<p>
					Initialize the client and submit your first video generation task.
				</p>

				<CodeBlock
					language="go"
					filename="main.go"
					code={`package main

import (
	"fmt"
	"log"

	"github.com/JThh/vcursor/go/vcursor"
)

func main() {
	client := vcursor.NewClient(vcursor.Options{APIKey: "vk-..."})

	// Submit a video generation task
	resp, err := client.Submit(&vcursor.SubmitRequest{
		Prompt: "a cat playing piano in a jazz club",
	})
	if err != nil {
		log.Fatal(err)
	}

	// Wait for completion with progress callback
	result, err := client.WaitForCompletion(resp.TaskID, 0, func(p *vcursor.TaskProgress) {
		fmt.Printf("%.0f%%\\n", p.Data.Progress)
	})
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(result.Data.Products.URL)
}`}
				/>
			</section>

			<section className="doc-section">
				<h2>Agent Mode</h2>
				<p>
					For complex tasks, use the Agent API to orchestrate multi-step generation.
				</p>
				<CodeBlock
					language="go"
					filename="agent.go"
					code={`resp, err := client.SubmitAgent(&vcursor.AgentSubmitRequest{
	Message:     "create a 30s commercial for a coffee brand",
	Duration:    "30s",
	AspectRatio: "16:9",
})
if err != nil {
	log.Fatal(err)
}

result, err := client.WaitForAgentCompletion(resp.TaskID, 0, func(p *vcursor.AgentProgress) {
	fmt.Printf("%.0f%% - %s\\n", p.Progress, p.CurrentStage)
})
if err != nil {
	log.Fatal(err)
}

fmt.Println(result.VideoURL)`}
				/>
			</section>

			<section className="doc-section">
				<h2>Concurrency Limiting</h2>
				<p>
					Manage your API usage with built-in concurrency checks.
				</p>
				<CodeBlock
					language="go"
					code={`status, err := client.CheckConcurrency("standard")
fmt.Printf("Used: %d/%.0f\\n", status.Used, status.Limit)

// Client-side limit
maxConc := 10
client := vcursor.NewClient(vcursor.Options{
	APIKey:         "vk-...",
	MaxConcurrency: &maxConc,
})`}
				/>
			</section>
		</div>
	);
}
