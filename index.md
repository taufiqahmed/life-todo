---
layout: default
title: Home
theme: home
---

<style>
  /* ── 4×1 horizontal strip ── */
  .category-strip {
    display: flex;
    width: 100%;
    height: 300px;
    border-radius: 0.75rem;
    overflow: hidden;
    border: 1px solid #2a2a2a;
  }

  .category-card {
    position: relative;
    overflow: hidden;
    border: none;
    border-right: 1px solid rgba(255,255,255,0.06);
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    min-width: 0;
    transition: flex 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .category-card:last-child {
    border-right: none;
  }

  .category-strip:hover .category-card {
    flex: 0.55;
  }

  .category-strip .category-card:hover {
    flex: 3;
  }

  /* ── Per-card background colors only ── */
  .category-card-books  { background: #0e1c11; }
  .category-card-movies { background: #111111; }
  .category-card-games  { background: #160e30; }
  .category-card-places { background: #08081a; }

  /* Subtle brightness lift on hover */
  .category-card:hover { filter: brightness(1.12); }

  /* ── Large background emoji (watermark) ── */
  .card-bg-emoji {
    position: absolute;
    font-size: 9rem;
    opacity: 0.12;
    pointer-events: none;
    user-select: none;
    bottom: -0.5rem;
    right: -0.75rem;
    line-height: 1;
    transition: opacity 0.4s ease, transform 0.5s ease;
    z-index: 0;
  }

  .category-card:hover .card-bg-emoji {
    opacity: 0.18;
    transform: scale(1.08) translate(-4px, -4px);
  }

  /* ── Card content ── */
  .card-inner {
    position: relative;
    z-index: 1;
    padding: 1.5rem 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  /* Category name — always visible, unified style */
  .card-name {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: rgba(255,255,255,0.9);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Subtitle and badges — fade in when expanded */
  .card-sub {
    font-family: 'Inter', sans-serif;
    font-size: 0.78rem;
    font-weight: 400;
    color: rgba(255,255,255,0.4);
    white-space: nowrap;
    opacity: 0;
    transform: translateY(5px);
    transition: opacity 0.3s ease 0.08s, transform 0.3s ease 0.08s;
  }

  .card-badges {
    display: flex;
    gap: 0.4rem;
    flex-wrap: nowrap;
    margin-top: 0.25rem;
    opacity: 0;
    transform: translateY(5px);
    transition: opacity 0.3s ease 0.14s, transform 0.3s ease 0.14s;
  }

  .category-card:hover .card-sub,
  .category-card:hover .card-badges {
    opacity: 1;
    transform: translateY(0);
  }

  /* Unified badge style */
  .card-badge {
    display: inline-block;
    padding: 3px 10px;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    border-radius: 999px;
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.65);
    border: 1px solid rgba(255,255,255,0.12);
    white-space: nowrap;
  }

  /* Collapsed label — vertical text shown only when strip is hovered but this card is not */
  .card-collapsed-label {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .card-collapsed-label span {
    font-family: 'Inter', sans-serif;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
  }

  /* When strip is hovered: show collapsed labels on non-active cards, hide card-inner */
  .category-strip:hover .card-collapsed-label {
    opacity: 1;
  }

  .category-strip .category-card:hover .card-collapsed-label {
    opacity: 0;
  }

  .category-strip:hover .card-inner {
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  .category-strip .category-card:hover .card-inner {
    opacity: 1;
    transition: opacity 0.3s ease 0.12s;
  }
</style>

<!-- Hero -->
<div class="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
  <!-- <p class="text-xs font-semibold tracking-widest uppercase mb-3" style="color: #f59e0b;">Personal tracker</p> -->
  <h1 class="text-5xl md:text-7xl font-bold mb-4 tracking-tight" style="color: #e5e5e5;">Life List</h1>
  <p class="text-lg md:text-xl max-w-lg mx-auto" style="color: #888;">Things I want to read, watch, play, and explore.</p>
</div>

<!-- Days Gone countdown -->
<style>
  .dg-countdown-wrap {
    max-width: 64rem;
    margin: 0 auto 3.5rem;
    padding: 0 1.5rem;
  }

  .dg-countdown {
    position: relative;
    overflow: hidden;
    border: 1px solid #2a2a2a;
    border-radius: 0.75rem;
    padding: 2rem 1.5rem 1.75rem;
    background: #0d0d0d;
  }

  /* Atmospheric grain + vignette overlay */
  .dg-countdown::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 90% 70% at 50% 0%, rgba(245,158,11,0.05) 0%, transparent 65%),
      radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%);
    pointer-events: none;
    z-index: 0;
  }

  /* Subtle horizontal scan-line texture */
  .dg-countdown::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(0,0,0,0.18) 3px,
      rgba(0,0,0,0.18) 4px
    );
    pointer-events: none;
    z-index: 0;
  }

  .dg-countdown-inner {
    position: relative;
    z-index: 1;
  }

  .dg-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: rgba(245,158,11,0.55);
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }

  .dg-label::before,
  .dg-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(245,158,11,0.2), transparent);
  }

  .dg-units {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    flex-wrap: wrap;
  }

  .dg-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    min-width: 4.5rem;
  }

  .dg-digits {
    font-family: 'Outfit', system-ui, sans-serif;
    font-size: clamp(2rem, 5vw, 3.25rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #e5e5e5;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    /* Odometer flicker on change */
    transition: color 0.08s ease;
    text-shadow: 0 0 18px rgba(245,158,11,0.15);
  }

  .dg-digits.tick {
    color: #f59e0b;
    text-shadow: 0 0 24px rgba(245,158,11,0.6);
  }

  .dg-unit-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.55rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.25);
  }

  .dg-sep {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(1.5rem, 3.5vw, 2.5rem);
    font-weight: 800;
    color: rgba(245,158,11,0.25);
    line-height: 1;
    align-self: flex-start;
    padding-top: 0.25rem;
    margin-top: 0.15rem;
  }

  .dg-footer {
    margin-top: 1.25rem;
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 0.62rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.18);
  }

  .dg-footer strong {
    color: rgba(245,158,11,0.5);
    font-weight: 700;
  }

  /* Progress bar */
  .dg-progress-wrap {
    margin-top: 1.5rem;
    background: rgba(255,255,255,0.04);
    border-radius: 999px;
    height: 3px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.05);
  }

  .dg-progress-bar {
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #92400e, #f59e0b, #fbbf24);
    box-shadow: 0 0 8px rgba(245,158,11,0.5);
    transition: width 1s linear;
  }
</style>

<!-- Category strip -->
<div class="max-w-5xl mx-auto px-6 pb-20">
  <div class="category-strip">

    <!-- Books -->
    {% assign books_done    = site.data.books | where: "status", "completed" %}
    {% assign books_planned = site.data.books | where: "status", "planned" %}
    <a href="{{ '/books' | relative_url }}" class="category-card category-card-books">
      <div class="card-bg-emoji">📚</div>
      <div class="card-collapsed-label"><span>Books</span></div>
      <div class="card-inner">
        <h2 class="card-name">Books</h2>
        <p class="card-sub">Reading list &amp; reviews</p>
        <div class="card-badges">
          <span class="card-badge">{{ books_done.size }} read</span>
          <span class="card-badge">{{ books_planned.size }} to read</span>
        </div>
      </div>
    </a>

    <!-- Movies & TV -->
    {% assign movies_done    = site.data.movies_tv | where: "status", "completed" %}
    {% assign movies_planned = site.data.movies_tv | where: "status", "planned" %}
    <a href="{{ '/movies-tv' | relative_url }}" class="category-card category-card-movies">
      <div class="card-bg-emoji">🎬</div>
      <div class="card-collapsed-label"><span>Movies &amp; TV</span></div>
      <div class="card-inner">
        <h2 class="card-name">Movies &amp; TV</h2>
        <p class="card-sub">Watchlist &amp; reviews</p>
        <div class="card-badges">
          <span class="card-badge">{{ movies_done.size }} watched</span>
          <span class="card-badge">{{ movies_planned.size }} to watch</span>
        </div>
      </div>
    </a>

    <!-- Games -->
    {% assign games_done    = site.data.games | where: "status", "completed" %}
    {% assign games_planned = site.data.games | where: "status", "planned" %}
    <a href="{{ '/games' | relative_url }}" class="category-card category-card-games">
      <div class="card-bg-emoji">🕹️</div>
      <div class="card-collapsed-label"><span>Games</span></div>
      <div class="card-inner">
        <h2 class="card-name">Games</h2>
        <p class="card-sub">Backlog &amp; reviews</p>
        <div class="card-badges">
          <span class="card-badge">{{ games_done.size }} done</span>
          <span class="card-badge">{{ games_planned.size }} queued</span>
        </div>
      </div>
    </a>

    <!-- Places -->
    {% assign places_done    = site.data.places | where: "status", "completed" %}
    {% assign places_planned = site.data.places | where: "status", "planned" %}
    <a href="{{ '/places' | relative_url }}" class="category-card category-card-places">
      <div class="card-bg-emoji">🌍</div>
      <div class="card-collapsed-label"><span>Places</span></div>
      <div class="card-inner">
        <h2 class="card-name">Places</h2>
        <p class="card-sub">Travel list &amp; memories</p>
        <div class="card-badges">
          <span class="card-badge">{{ places_done.size }} visited</span>
          <span class="card-badge">{{ places_planned.size }} to visit</span>
        </div>
      </div>
    </a>

  </div>

  <!-- Days Gone countdown -->
  <div class="dg-countdown-wrap" style="max-width:100%; padding:0; margin: 2rem 0 0;">
    <div class="dg-countdown">
      <div class="dg-countdown-inner">
        <div class="dg-units">
          <div class="dg-unit">
            <span class="dg-digits" id="dg-days">----</span>
            <span class="dg-unit-label">Days</span>
          </div>
          <div class="dg-sep">:</div>
          <div class="dg-unit">
            <span class="dg-digits" id="dg-hours">--</span>
            <span class="dg-unit-label">Hours</span>
          </div>
          <div class="dg-sep">:</div>
          <div class="dg-unit">
            <span class="dg-digits" id="dg-minutes">--</span>
            <span class="dg-unit-label">Min</span>
          </div>
          <div class="dg-sep">:</div>
          <div class="dg-unit">
            <span class="dg-digits" id="dg-seconds">--</span>
            <span class="dg-unit-label">Sec</span>
          </div>
        </div>

        <div class="dg-progress-wrap">
          <div class="dg-progress-bar" id="dg-bar" style="width: 0%"></div>
        </div>

        <p class="dg-footer">target <strong>Jan 1, 2030</strong></p>
      </div>
    </div>

  </div>

  <script>
  (function () {
    var target = new Date('2030-01-01T00:00:00');
    var origin = new Date('2026-01-01T00:00:00');
    var totalMs = target - origin;

    var elD  = document.getElementById('dg-days');
    var elH  = document.getElementById('dg-hours');
    var elM  = document.getElementById('dg-minutes');
    var elS  = document.getElementById('dg-seconds');
    var elBar = document.getElementById('dg-bar');

    function pad(n, len) { return String(n).padStart(len, '0'); }

    function flash(el) {
      el.classList.add('tick');
      setTimeout(function () { el.classList.remove('tick'); }, 120);
    }

    var prevSec = null;
    var prevMin = null;

    function tick() {
      var now  = new Date();
      var diff = target - now;

      if (diff <= 0) {
        elD.textContent = '0000';
        elH.textContent = '00'; elM.textContent = '00'; elS.textContent = '00';
        elBar.style.width = '100%';
        return;
      }

      var totalSecs  = Math.floor(diff / 1000);
      var secs       = totalSecs % 60;
      var totalMins  = Math.floor(totalSecs / 60);
      var mins       = totalMins % 60;
      var totalHours = Math.floor(totalMins / 60);
      var hours      = totalHours % 24;
      var totalDays  = Math.floor(totalHours / 24);

      elD.textContent = pad(totalDays, 4);
      elH.textContent = pad(hours, 2);
      elM.textContent = pad(mins, 2);

      if (prevSec !== secs) {
        elS.textContent = pad(secs, 2);
        flash(elS);
        prevSec = secs;
      }
      if (prevMin !== mins) {
        flash(elM);
        prevMin = mins;
      }

      var elapsed = now - origin;
      elBar.style.width = Math.min(100, (elapsed / totalMs) * 100).toFixed(4) + '%';
    }

    tick();
    setInterval(tick, 1000);
  })();
  </script>

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
          <div class="shrink-0 text-sm" style="color: #f59e0b;">
            {% for i in (1..item.rating) %}★{% endfor %}
          </div>
          {% endif %}
        </div>
      {% endfor %}

    </div>

  </div>

</div>
