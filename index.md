---
layout: default
title: Home
theme: home
---

<style>
  .category-card {
    position: relative;
    overflow: hidden;
    border-radius: 0.75rem;
    border: 1px solid;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    text-decoration: none;
    display: block;
  }
  .category-card:hover {
    transform: translateY(-4px);
  }
  .category-card-books {
    background: #faf7f2;
    border-color: #d4c9b0;
    color: #2c1810;
  }
  .category-card-books:hover { box-shadow: 3px 6px 32px rgba(44,24,16,0.22); }
  .category-card-movies {
    background: #111111;
    border-color: #2a2010;
    color: #f0e8d5;
  }
  .category-card-movies:hover { box-shadow: 0 8px 40px rgba(232,184,75,0.18); }
  .category-card-games {
    background: #0d150d;
    border-color: #1a3a1a;
    color: #c8f0c8;
  }
  .category-card-games:hover { box-shadow: 0 0 32px rgba(57,255,20,0.2); }
  .category-card-places {
    background: #fdf6ec;
    border-color: #d4b896;
    color: #2d1f0e;
  }
  .category-card-places:hover { box-shadow: 2px 6px 32px rgba(45,31,14,0.2); }

  .card-accent-books   { color: #8b4513; font-family: 'Playfair Display', serif; }
  .card-accent-movies  { color: #e8b84b; font-family: 'Bebas Neue', Impact, sans-serif; letter-spacing: 0.05em; }
  .card-accent-games   { color: #39ff14; font-family: 'JetBrains Mono', monospace; text-shadow: 0 0 8px rgba(57,255,20,0.7); }
  .card-accent-places  { color: #c1440e; }

  .card-meta-books   { color: #7a6651; }
  .card-meta-movies  { color: #8a7a60; }
  .card-meta-games   { color: #5a8a5a; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; }
  .card-meta-places  { color: #7a5c3a; }

  .card-badge-books  { background: #ede0cc; color: #5c3317; border: 1px solid #c4a882; font-family: 'Lora', serif; }
  .card-badge-movies { background: #2a0a0a; color: #e85b5b; border: 1px solid #7a1a1a; letter-spacing: 0.06em; }
  .card-badge-games  { background: #041004; color: #39ff14; border: 1px solid #1a6a1a; font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; }
  .card-badge-places { background: #e8d5b8; color: #5a3e1c; border: 1px solid #b8946a; border-radius: 1rem; }

  /* books scanlines on card */
  .card-deco-books { background-image: repeating-linear-gradient(transparent, transparent 27px, rgba(139,69,19,0.05) 27px, rgba(139,69,19,0.05) 28px); }
  /* games scanlines */
  .card-deco-games::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 4px);
    z-index: 0;
  }
  .card-inner { position: relative; z-index: 1; }
</style>

<!-- Hero -->
<div class="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
  <p class="text-xs font-semibold tracking-widest uppercase mb-3" style="color: #6366f1;">Personal tracker</p>
  <h1 class="text-5xl md:text-7xl font-bold mb-4 tracking-tight" style="color: #e5e5e5;">Life List</h1>
  <p class="text-lg md:text-xl max-w-lg mx-auto" style="color: #888;">Things I want to read, watch, play, and explore — and what I thought of them.</p>
</div>

<!-- Category grid -->
<div class="max-w-5xl mx-auto px-6 pb-20">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

    <!-- Books -->
    {% assign books_done    = site.data.books | where: "status", "completed" %}
    {% assign books_planned = site.data.books | where: "status", "planned" %}
    <a href="{{ '/books' | relative_url }}" class="category-card category-card-books card-deco-books p-7">
      <div class="card-inner">
        <div class="text-4xl mb-3">📚</div>
        <h2 class="text-3xl font-bold mb-1 card-accent-books">Books</h2>
        <p class="text-sm mb-4 card-meta-books">Reading list &amp; reviews</p>
        <div class="flex gap-3">
          <span class="text-xs font-semibold px-3 py-1 rounded card-badge-books">{{ books_done.size }} read</span>
          <span class="text-xs font-semibold px-3 py-1 rounded card-badge-books">{{ books_planned.size }} to read</span>
        </div>
      </div>
    </a>

    <!-- Movies & TV -->
    {% assign movies_done    = site.data.movies_tv | where: "status", "completed" %}
    {% assign movies_planned = site.data.movies_tv | where: "status", "planned" %}
    <a href="{{ '/movies-tv' | relative_url }}" class="category-card category-card-movies p-7">
      <div class="card-inner">
        <div class="text-4xl mb-3">🎬</div>
        <h2 class="text-3xl font-bold mb-1 card-accent-movies">Movies &amp; TV</h2>
        <p class="text-sm mb-4 card-meta-movies">Watchlist &amp; reviews</p>
        <div class="flex gap-3">
          <span class="text-xs font-semibold px-3 py-1 rounded card-badge-movies">{{ movies_done.size }} watched</span>
          <span class="text-xs font-semibold px-3 py-1 rounded card-badge-movies">{{ movies_planned.size }} to watch</span>
        </div>
      </div>
    </a>

    <!-- Games -->
    {% assign games_done    = site.data.games | where: "status", "completed" %}
    {% assign games_planned = site.data.games | where: "status", "planned" %}
    <a href="{{ '/games' | relative_url }}" class="category-card category-card-games card-deco-games p-7">
      <div class="card-inner">
        <div class="text-4xl mb-3">🕹️</div>
        <h2 class="text-3xl font-bold mb-1 card-accent-games">&gt;_ Games</h2>
        <p class="text-sm mb-4 card-meta-games">// backlog &amp; reviews</p>
        <div class="flex gap-3">
          <span class="text-xs font-semibold px-3 py-1 card-badge-games">{{ games_done.size }} completed</span>
          <span class="text-xs font-semibold px-3 py-1 card-badge-games">{{ games_planned.size }} queued</span>
        </div>
      </div>
    </a>

    <!-- Places -->
    {% assign places_done    = site.data.places | where: "status", "completed" %}
    {% assign places_planned = site.data.places | where: "status", "planned" %}
    <a href="{{ '/places' | relative_url }}" class="category-card category-card-places p-7">
      <div class="card-inner">
        <div class="text-4xl mb-3">🌍</div>
        <h2 class="text-3xl font-bold mb-1 card-accent-places">Places</h2>
        <p class="text-sm mb-4 card-meta-places">Travel list &amp; memories</p>
        <div class="flex gap-3">
          <span class="text-xs font-semibold px-3 py-1 card-badge-places">{{ places_done.size }} visited</span>
          <span class="text-xs font-semibold px-3 py-1 card-badge-places">{{ places_planned.size }} to visit</span>
        </div>
      </div>
    </a>

  </div>

  <!-- Recent completions: build a flat list with emoji labels -->
  {% assign recent_items = "" | split: "" %}
  {% for item in site.data.books %}{% if item.status == "completed" %}{% assign labeled = item | inspect %}{% endif %}{% endfor %}

  <div class="mt-16">
    <h2 class="text-2xl font-bold mb-6" style="color: #e5e5e5;">Recently Completed</h2>
    <div class="grid gap-3">

      {% assign cat_keys   = "books,movies_tv,games,places" | split: "," %}
      {% assign cat_icons  = "📚,🎬,🕹️,🌍"                 | split: "," %}
      {% assign cat_links  = "books,movies-tv,games,places" | split: "," %}

      <!-- collect all completed items with their category icon, sort by date, show top 8 -->
      {% assign all_completed = "" | split: "" %}
      {% for cat in cat_keys %}
        {% assign cat_icon = cat_icons[forloop.index0] %}
        {% assign cat_link = cat_links[forloop.index0] %}
        {% for item in site.data[cat] %}
          {% if item.status == "completed" %}
            {% assign entry = item | merge: "[]" %}
            <!-- We use a workaround: render each row directly sorted per cat -->
          {% endif %}
        {% endfor %}
      {% endfor %}

      <!-- Render all completed items from all cats, sorted by completed_date desc, limit 8 -->
      {% assign pool = "" | split: "" %}
      {% for item in site.data.books      %}{% if item.status == "completed" %}{% assign pool = pool | push: item %}{% endif %}{% endfor %}
      {% for item in site.data.movies_tv  %}{% if item.status == "completed" %}{% assign pool = pool | push: item %}{% endif %}{% endfor %}
      {% for item in site.data.games      %}{% if item.status == "completed" %}{% assign pool = pool | push: item %}{% endif %}{% endfor %}
      {% for item in site.data.places     %}{% if item.status == "completed" %}{% assign pool = pool | push: item %}{% endif %}{% endfor %}
      {% assign pool = pool | sort: "completed_date" | reverse %}

      {% for item in pool limit: 8 %}
        {% assign icon = "📌" %}
        {% for bk in site.data.books     %}{% if bk.title == item.title and bk.status == "completed" %}{% assign icon = "📚" %}{% endif %}{% endfor %}
        {% for mv in site.data.movies_tv %}{% if mv.title == item.title and mv.status == "completed" %}{% assign icon = "🎬" %}{% endif %}{% endfor %}
        {% for gm in site.data.games     %}{% if gm.title == item.title and gm.status == "completed" %}{% assign icon = "🕹️" %}{% endif %}{% endfor %}
        {% for pl in site.data.places    %}{% if pl.title == item.title and pl.status == "completed" %}{% assign icon = "🌍" %}{% endif %}{% endfor %}

        <div class="flex items-center gap-4 p-4 rounded-lg border" style="background: #1a1a1a; border-color: #2a2a2a;">
          <div class="text-2xl shrink-0">{{ icon }}</div>
          <div class="flex-1 min-w-0">
            <p class="font-semibold truncate" style="color: #e5e5e5;">{{ item.title }}</p>
            <p class="text-xs" style="color: #888;">{{ item.completed_date | date: "%B %Y" }}</p>
          </div>
          {% if item.rating %}
          <div class="shrink-0 text-sm" style="color: #6366f1;">
            {% for i in (1..item.rating) %}★{% endfor %}
          </div>
          {% endif %}
        </div>
      {% endfor %}

    </div>
  </div>

</div>
