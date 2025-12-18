---
layout: page
title: Projects
permalink: /projects/
description: A collection of my research and development work.
nav: true
nav_order: 2
display_categories: [research, development]
horizontal: false
---

<h2 class="category">Research</h2>
<hr>

<div class="projects">
  <div class="grid">
  {% for project in site.projects %}
    {% if project.category == 'research' %}
      {% include projects.liquid %}
    {% endif %}
  {% endfor %}
  </div>
</div>

<br>
<br>

<h2 class="category">Development</h2>
<hr>

<div class="projects">
  <div class="grid">
  {% for project in site.projects %}
    {% if project.category == 'development' %}
      {% include projects.liquid %}
    {% endif %}
  {% endfor %}
  </div>
</div>
