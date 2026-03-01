---
layout: default
title: Tags
theme: home
permalink: /tags/
---

<style>
  .tag-index-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 999px;
    font-size: 0.82rem;
    font-weight: 500;
    border: 1px solid #2a2a2a;
    background: #1a1a1a;
    color: #a5b4fc;
    text-decoration: none;
    transition: background 0.15s, border-color 0.15s, transform 0.15s;
  }
  .tag-index-pill:hover {
    background: #222236;
    border-color: #6366f1;
    transform: translateY(-1px);
  }
  .tag-count {
    font-size: 0.7rem;
    background: #2a2a3e;
    color: #818cf8;
    border-radius: 999px;
    padding: 1px 7px;
    font-weight: 600;
  }
  .category-section h3 {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 0.75rem;
  }
</style>

<div class="max-w-5xl mx-auto px-6 py-12">
  <p class="text-xs font-semibold tracking-widest uppercase mb-2" style="color: #6366f1;">Browse by tag</p>
  <h1 class="text-4xl font-bold mb-2" style="color: #e5e5e5;">All Tags</h1>
  <p class="mb-10 text-sm" style="color: #888;">Click a tag to jump to that category's filtered view.</p>

  {% assign categories = "books,movies_tv,games,places" | split: "," %}
  {% assign cat_labels  = "Books,Movies & TV,Games,Places"  | split: "," %}
  {% assign cat_links   = "books,movies-tv,games,places"    | split: "," %}
  {% assign cat_icons   = "📚,🎬,🕹️,🌍"                    | split: "," %}

  {% for cat in categories %}
    {% assign cat_data  = site.data[cat] %}
    {% assign cat_label = cat_labels[forloop.index0] %}
    {% assign cat_link  = cat_links[forloop.index0] %}
    {% assign cat_icon  = cat_icons[forloop.index0] %}

    {% assign cat_tags = "" | split: "" %}
    {% for item in cat_data %}
      {% if item.tags %}
        {% for tag in item.tags %}
          {% assign cat_tags = cat_tags | push: tag %}
        {% endfor %}
      {% endif %}
    {% endfor %}
    {% assign cat_tags = cat_tags | uniq | sort %}

    {% if cat_tags.size > 0 %}
    <div class="category-section mb-10">
      <h3>{{ cat_icon }} {{ cat_label }}</h3>
      <div class="flex flex-wrap gap-2">
        {% for tag in cat_tags %}
          {% assign count = 0 %}
          {% for item in cat_data %}
            {% if item.tags contains tag %}
              {% assign count = count | plus: 1 %}
            {% endif %}
          {% endfor %}
          <a href="{{ '/' | append: cat_link | append: '/#' | append: tag | relative_url }}" class="tag-index-pill">
            #{{ tag }}
            <span class="tag-count">{{ count }}</span>
          </a>
        {% endfor %}
      </div>
    </div>
    {% endif %}
  {% endfor %}
</div>
