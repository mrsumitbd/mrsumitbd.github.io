---
layout: page
title: Projects
permalink: /projects/
description: A collection of my research and development work.
nav: true
nav_order: 6
display_categories: [research, development]
horizontal: false
---

<h2 class="category">Research</h2>
<hr>

<div class="container-fluid">
  <div class="row">
  {% for project in site.projects %}
    {% if project.category == 'research' %}
      <div class="col-12 col-md-6 mb-4">
        {% include projects.liquid %}
      </div>
    {% endif %}
  {% endfor %}
  </div>
</div>

<br>

<h2 class="category">Development</h2>
<hr>

<div class="container-fluid">
  <div class="row">
  {% for project in site.projects %}
    {% if project.category == 'development' %}
      <div class="col-12 col-md-6 mb-4">
        {% include projects.liquid %}
      </div>
    {% endif %}
  {% endfor %}
  </div>
</div>
