---
layout: page
title: CodeProbe
description: A universal, interpretable detector for LLM-generated code.
img: assets/img/codeprobe_thumb.jpg
importance: 1
category: research
---

**CodeProbe** is a proposed framework for the universal detection of LLM-generated code.

### The Challenge
Current detection tools rely heavily on "black-box" machine learning models. While effective, they lack interpretability—developers are told code is "AI-generated" without knowing *why*—and they often struggle when faced with out-of-distribution data (code languages or models they weren't trained on).

### Our Approach
We are investigating the use of **Knowledge Units (KUs)**—atomic representations of coding patterns—to distinguish between human-written and AI-generated code. By analyzing the density and distribution of these units, CodeProbe aims to provide a detection method that is both highly accurate and human-interpretable.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/codeprobe_demo.jpg" title="CodeProbe Analysis" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A conceptual dashboard of CodeProbe, showing a code snippet analyzed for its human vs. AI origin based on underlying Knowledge Units.
</div>
