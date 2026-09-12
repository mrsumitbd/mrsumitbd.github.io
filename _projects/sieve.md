---
layout: page
title: SIEVE
description: A parameterized GitHub corpus builder for contamination-free, post-cutoff code evaluation.
img: assets/img/SIEVE-pipeline.png
importance: 1
category: research
---

**SIEVE (Software Ingestion & Extraction for Verifiable Evaluation)** is a parameterized GitHub corpus builder for software engineering research.

### The Problem
Evaluating LLMs on code tasks is increasingly compromised by training data contamination—benchmarks built from public repositories risk overlapping with a model's training set, inflating reported performance.

### Our Approach
SIEVE produces contamination-free, post-cutoff code corpora directly from public repositories, with full control over language, recency, and repository quality. It supports **Python**, **Java**, **JavaScript**, and **C++**, and includes a CodeBERT-based classifier for detecting LLM-generated code (F1=0.9478, AUROC=0.9902, trained on 114K samples across 9 LLMs).

### Stack
Python, Streamlit, HuggingFace, tree-sitter

***

*View the code on [GitHub](https://github.com/mrsumitbd/sieve).*
*Try the live demo on [HuggingFace Spaces](https://mrahman2025-sieve.hf.space).*
*Paper to appear at **MSR 2027** (Data & Tool Showcase Track).*
