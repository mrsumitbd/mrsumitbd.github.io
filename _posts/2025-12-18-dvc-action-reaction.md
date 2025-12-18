---
layout: post
title: "Data Version Control (DVC): The Action and The Reaction"
date: 2025-12-18 14:46:00 -0500
description: An empirical study on how open-source developers actually use DVC and how it impacts their workflow.
tags: research mlops software-engineering
categories: publications
giscus_comments: true
related_posts: false
---

Machine Learning (ML) engineering has a "data problem." Unlike traditional software, where versioning code is solved by Git, ML systems depend heavily on large datasets that Git struggles to handle. Tools like **Data Version Control (DVC)** have emerged to bridge this gap, promising to manage data, models, and pipelines as seamlessly as code.

But how are developers actually using these tools in the wild? And does adopting them actually improve the development process?

In our paper, **"DVC in Open Source ML-development: The Action and the Reaction,"** presented at **CAIN 2024**, we conducted an empirical study of 56 real-world open-source projects to find the answers.

### The Action: How is DVC Used?
We analyzed the usage patterns of DVC ("The Action") and found a clear preference. While DVC offers features for both **data versioning** and **pipeline management**, the community overwhelmingly uses it for the former.

* **85.7%** of projects use DVC exclusively for **versioning and tracking** (mostly data files).
* **Zero** projects used it solely for pipelines.
* Only **14.3%** used both features.

This suggests that while DVC is the "go-to" for handling large files, practitioners often prefer other tools (like MLflow) for managing their experiment pipelines.

### The Reaction: How Does It Impact Workflow?
We also performed an Interrupted Time-Series (ITS) analysis to measure the impact of adopting DVC on the project's health ("The Reaction"). The results revealed two fascinating trends:

1.  **Fewer Pull Requests (PRs):** After adopting DVC, the number of PRs consistently dropped. This is actually a positive sign of **decoupling**—data scientists can now update datasets independently without needing to open a code-change PR for every data tweak.
2.  **The "Spike then Drop" in Bugs:** We observed a sudden spike in bug-fix commits immediately after adoption (the "teething pains" of integration), followed by a sustained decrease. This indicates that while the initial setup requires effort, DVC leads to a more stable repository in the long run.

DVC is clearly more than just a storage tool; it fundamentally alters the rhythm of ML collaboration.

<hr>
<details>
  <summary><strong>Cite the paper</strong></summary>
  <br>
  <pre><code>@inproceedings{barreto2024dvc,<br>
  title={DVC in Open Source ML-development: The Action and the Reaction},<br>
  author={Barreto Simedo Pacheco, Lorena and Rahman, Musfiqur and Rabbi, Fazle and Fathollahzadeh, Pouya and Abdellatif, Ahmad and Shihab, Emad and Chen, Tse-Hsun and Yang, Jinqiu and Zou, Ying},<br>
  booktitle={Proceedings of the IEEE/ACM 3rd International Conference on AI Engineering-Software Engineering for AI},<br>
  pages={75--80},<br>
  year={2024}<br>
}</code></pre>
</details>