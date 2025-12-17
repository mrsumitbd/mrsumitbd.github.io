---
layout: post
title: "Is Code Really More 'Natural' Than English?"
date: 2025-12-17 12:00:00
description: We revisited the famous 'Natural Software' hypothesis and found that syntax rules—not logic—drive most of the repetition in code.
tags: research software-engineering nlp
categories: publications
giscus_comments: false
related_posts: true
toc:
  sidebar: left
---

*Published at [ICSE 2019](http://users.encs.concordia.ca/~pcr/paper/Rahman2019ICSE-draft.pdf).*

## The 30-Second Summary
**TL;DR:** Previous research claimed software is huge amounts more repetitive ("natural") than English. We found that this is mostly an illusion caused by rigid syntax like semicolons and braces. When you strip those away, code is only slightly more repetitive than technical English. However, **API usages** remain highly predictable, suggesting that future AI tools should focus on graphs of API calls rather than simple text prediction.

---

## The Problem
In 2012, a groundbreaking study coined the term "Natural Software," showing that code is highly repetitive—much more so than English text. This led to a boom in statistical tools that treat code like text (e.g., n-gram models for autocompletion).

But here is the catch: **Code has strict grammar rules.** If a tool predicts a `;` at the end of a line, is it really "understanding" your code, or just following a rule? We suspected that existing models were "cheating" by predicting easy syntax tokens rather than meaningful logic.

## Our Approach
We revisited the original study but added a twist. We analyzed 134 open-source projects across 7 languages (Java, C, Python, Ruby, etc.) and technical discussions from StackOverflow.

* **Step 1:** We replicated the original n-gram experiments to establish a baseline.
* **Step 2:** We systematically removed "SyntaxTokens" (separators, operators, keywords) to measure the "true" entropy of the logic.
* **Step 3:** We compared sequential models (n-grams) against **Graph-based Object Usage Models (GROUMs)** to see if graphs captured patterns better.

## Key Results
Our data tells a different story about code repetitiveness:

1.  **It’s the Syntax:** When we removed syntax tokens (like `{`, `}`, `;`), the "unnatural" repetitiveness of code dropped distinctively. [cite_start]Java code without syntax is only ~10-20% more repetitive than technical English on StackOverflow[cite: 238, 250].
2.  **APIs are Key:** While general code isn't super repetitive, **API usages** are. [cite_start]Using a file input stream looks almost identical across thousands of different projects[cite: 252, 284].
3.  **Graphs Win:** Compilers don't read code left-to-right, and neither should AI. [cite_start]We found that **graph representations** of code were significantly more repetitive (predictable) than text sequences, capturing relationships that n-grams miss[cite: 378, 403].

## Why This Matters
For software engineers and tool builders, this changes how we build intelligent assistants:

* **Stop predicting semicolons:** Tools should focus on "high-value" predictions, like API calls and method chains, rather than syntax that a compiler can fix.
* **Think in Graphs:** Since graphs capture more signal than text, the next generation of "Copilots" should leverage structural information (Data/Control flow) rather than just treating code as a sequence of words.

## Resources
* [📄 Read the Paper (PDF)](http://users.encs.concordia.ca/~pcr/paper/Rahman2019ICSE-draft.pdf)
* [💻 Replication Package](https://www.dropbox.com/s/o5016gelg8tx5yx/README.md?dl=0)

---
<hr>
<details>
  <summary><strong>Cite the paper</strong></summary>
  <br>
  <pre><code>@inproceedings{rahman2019natural,<br>
  title={Natural software revisited},<br>
  author={Rahman, Musfiqur and Palani, Dharani and Rigby, Peter C},<br>
  booktitle={2019 IEEE/ACM 41st International Conference on Software Engineering (ICSE)},<br>
  pages={37--48},<br>
  year={2019},<br>
  organization={IEEE}
}</code></pre>
</details>
