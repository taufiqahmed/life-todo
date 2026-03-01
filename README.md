# Life List

A personal life-TODO and review site built with Jekyll and Tailwind CSS, hosted on GitHub Pages.

Track books, movies & TV, games, and places — with planned dates, completion dates, ratings, reviews, and tags.

## Live site

https://YOUR_USERNAME.github.io/life-todo/  
*(update this after enabling GitHub Pages)*

---

## Local development

**Requirements:** Ruby (macOS has it built in; run `ruby -v` to confirm)

```bash
# One-time setup
gem install bundler
bundle install

# Start dev server
bundle exec jekyll serve

# Open http://localhost:4000
```

The server live-rebuilds on file saves. Tailwind CSS is loaded from CDN so no npm is needed.

---

## Adding items

All data lives in `_data/`. Edit the relevant YAML file:

| Category    | File                    |
|-------------|-------------------------|
| Books       | `_data/books.yml`       |
| Movies & TV | `_data/movies_tv.yml`   |
| Games       | `_data/games.yml`       |
| Places      | `_data/places.yml`      |

### Planned item (minimum required fields)

```yaml
- title: "Item title"
  status: planned
  planned_date: 2025-06-01     # ISO date: YYYY-MM-DD
  tags: [tag1, tag2]           # optional
  notes: "Why I want to do this"  # optional
```

### Completed item (with review)

```yaml
- title: "Item title"
  status: completed
  planned_date: 2025-01-01
  completed_date: 2025-03-15
  rating: 4                    # 1–5, optional
  review: "What I thought of it."
  tags: [tag1, tag2]
```

### Extra fields per category

**Books:** `author`  
**Movies & TV:** `director`, `type` (movie/tv), `year`  
**Games:** `platform`, `genre`  
**Places:** `country`, `type` (city/trek/nature/etc.)

---

## Marking an item as completed

1. Open the item's YAML file (e.g. `_data/books.yml`).
2. Change `status: planned` → `status: completed`.
3. Add `completed_date: YYYY-MM-DD`.
4. Optionally add `rating` (1–5) and `review`.
5. Commit and push — GitHub Pages rebuilds automatically.

---

## Tags

Tags are free-form strings in the `tags:` list. They:
- Display as clickable pills on each item card
- Filter the list on the category page (URL hash is updated, so filters are bookmarkable)
- Are indexed on the `/tags/` page

**Example:** `tags: [sci-fi, favorite, audiobook]`

---

## Themes

Each category page has its own visual theme — no configuration needed.

| Page       | Theme              | Colors / Style                        |
|------------|--------------------|---------------------------------------|
| Home       | Dark neutral       | `#0f0f0f`, indigo accents             |
| Books      | Paper & Ink        | Parchment, serif fonts, ruled lines   |
| Movies & TV| Cinematic Dark     | Black, gold/amber, film grain         |
| Games      | Retro Terminal     | Dark green, neon, CRT scanlines       |
| Places     | Atlas / Explorer   | Sandy beige, terracotta, topo lines   |

---

## Deploying to GitHub Pages

1. Create a GitHub repo (e.g. `life-todo`).
2. Push this folder to `main`.
3. Go to **Settings → Pages** → set source to **Deploy from branch: main / (root)**.
4. Your site will be live at `https://YOUR_USERNAME.github.io/life-todo/`.

If using a user/org site (`username.github.io`), set `baseurl: ""` in `_config.yml` — already done.

---

## File structure

```
life-todo/
├── _config.yml            # Jekyll config
├── Gemfile                # Ruby dependencies
├── _data/
│   ├── books.yml
│   ├── movies_tv.yml
│   ├── games.yml
│   └── places.yml
├── _layouts/
│   ├── default.html       # Base layout with theme system + nav
│   └── category.html      # Category page layout
├── _includes/
│   └── item_card.html     # Single item card component
├── assets/
│   └── js/
│       └── filter.js      # Tag filtering logic
├── index.md               # Home page
├── books.md
├── movies-tv.md
├── games.md
├── places.md
└── tags.md
```
