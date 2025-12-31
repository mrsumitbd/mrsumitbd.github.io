---
layout: page
title: CRAFT
description: Contextual Repair Agent for Flaky Tests - A Multi-Agent VS Code extension.
img: assets/img/flakyfix_thumb.jpg
importance: 1
category: development
---

**CRAFT (Contextual Repair Agent for Flaky Tests)** is a Multi-Agent VS Code extension designed to detect and repair flaky tests directly within the IDE.

### The Solution
Unlike traditional tools that rely on static analysis or simple regression, CRAFT utilizes a **Multi-Agent** architecture to analyze the test execution context dynamically. It supports both **Java** and **Python** environments.

The agents work collaboratively to:
1.  **Detect** flaky tests by analyzing execution history and code patterns.
2.  **Diagnose** the root cause (e.g., concurrency issues, async waits).
3.  **Repair** the code autonomously using LLM-based reasoning.

### Key Features
* **Multi-Agent Architecture:** Specialized agents for diagnosis, generation, and verification.
* **Dual Language Support:** Native integration for Java (JUnit) and Python (pytest).
* **IDE Integration:** seamless experience within VS Code.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flakyfix_demo.jpg" title="CRAFT Interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Snapshot of CRAFT detecting and repairing a flaky test in VS Code.
</div>

***

*View the code on [GitHub](https://github.com/mrsumitbd/CRAFT).*