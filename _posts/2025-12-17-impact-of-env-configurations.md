---
layout: post
title: "Why Your AI Model Costs More on a Different Machine"
date: 2025-12-17 12:00:00
description: We tested 30 AI systems across different environments. The result? Your accuracy might stay safe, but your cloud bill won't.
tags: research ai stability devops
categories: publications
giscus_comments: false
related_posts: true
toc:
  sidebar: left
---

*Preprint available on [arXiv](https://arxiv.org/abs/2408.02825).*

## The 30-Second Summary
**TL;DR:** Developers often worry that moving an AI model from Linux to macOS (or changing Python versions) will break its accuracy. We found that while accuracy *can* drop (in ~23% of cases), the real danger is **Instability in Time and Cost**. Changing your environment configuration can silently double your processing time or cloud costs in nearly **100% of cases**, without you realizing it until the bill arrives.

---

## The Problem
"It works on my machine" is the classic developer excuse. In traditional software, if the environment changes (e.g., different OS), the code usually crashes immediately.

But AI systems are "non-deterministic." If you change the underlying hardware (CPU architecture) or the software stack (Python version, OS), the system might not crash. Instead, it might:
1.  Give slightly different predictions (Model Instability).
2.  Take twice as long to run (Time Instability).
3.  Cost significantly more to compute (Expense Instability).

We wanted to know: **Which of these actually happens, and how bad is it?**

## Our Approach
We conducted an extensive empirical study using **Travis CI**.
* **Subjects:** 30 Open Source AI-enabled systems.
* **Variables:** We permuted 8 different environment configurations, changing the **Operating System** (Linux vs. macOS), **Python Version**, and **CPU Architecture**.
* **Metrics:** We measured shifts in Model Performance (accuracy), Processing Time, and Total Expense.

## Key Results
Our findings were surprising. Most people expect the model to "break" (lose accuracy), but that wasn't the biggest issue.

1.  **Accuracy is (Mostly) Safe:** When switching from Linux to macOS, only **23%** of projects saw a significant change in model performance.
2.  **Time is Volatile:** **96.67%** of projects experienced significant instability in processing time. A model that runs fast on Linux might crawl on macOS.
3.  **Cost is Guaranteed to Change:** **100%** of the studied projects saw expense instability.

## Why This Matters
For **DevOps Engineers and ML Practitioners**, this is a wake-up call.
* **Don't just check accuracy:** Passing your unit tests isn't enough. You need to benchmark *time* and *cost* across your deployment environments.
* **Standardize early:** Since configurations drastically impact cost, finding the "Optimal Configuration" isn't just about performance—it's about financial efficiency.
* **Containerize:** To avoid these "silent" cost spikes, use Docker to ensure your production environment matches your testing environment exactly.

## Resources
* [📄 Read the Paper (arXiv)](https://arxiv.org/abs/2408.02825)
* [💻 View the Code](https://github.com/mrsumitbd/Impact-of-Environment-Configurations)

<hr>
<details>
  <summary><strong>Cite this post</strong></summary>
  <br>
  <pre><code>@article{rahman2024impact,<br>
  title={The Impact of Environment Configurations on the Stability of AI-Enabled Systems},<br>
  author={Rahman, Musfiqur and Khatoonabadi, SayedHassan and Abdellatif, Ahmad and Samaana, Haya and Shihab, Emad},<br>
  journal={arXiv preprint arXiv:2408.02825},<br>
  year={2024}
}</code></pre>
</details>
