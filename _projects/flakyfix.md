---
layout: page
title: FlakyFix
description: A VS Code plug-in for real-time flaky test detection and repair.
img: assets/img/flakyfix_thumb.jpg
importance: 1
category: development
---

**FlakyFix** is an automated tool designed to help developers identify and fix flaky tests directly within their development environment.

### The Problem
Flaky tests—tests that fail intermittently without code changes—are a massive drain on developer productivity and CI/CD resources. Existing detection tools are often too slow to be used during the actual coding process.

### The Solution
FlakyFix operates as a **VS Code Plug-in**, analyzing test executions in real-time. It utilizes a lightweight machine learning model to:
1.  **Detect** potential flakiness as you write code.
2.  **Suggest** repairs based on common flakiness patterns (e.g., async waits, resource leaks).

### Goals
This project is currently under active development. The objective is to release it as a tool demonstration for **ICSE** or **MSR** Tool Tracks.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/flakyfix_demo.jpg" title="FlakyFix Interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A mockup of the FlakyFix interface highlighting a flaky test.
</div>

***

*View the code on [GitHub](https://github.com/mrsumitbd/FlakyFix).*
