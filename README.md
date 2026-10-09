# Zihao Guo — academic homepage

A build-free, bilingual academic homepage for GitHub Pages. English is the default; the language and theme buttons remember the visitor's preference. `?lang=en` and `?lang=zh` explicitly choose a language.

## Maintain

- `index.html`: profile, news, publications, projects, and education. Update the adjacent `.en` and `.zh` content together.
- `assets/css/style.css`: responsive layout and light/dark color variables.
- `assets/js/preferences.js`: apply language/theme before first paint.
- `assets/js/main.js`: language/theme controls, active section navigation, and keyboard-accessible figure dialogs.
- `assets/img/`: existing portraits and research figures.
- `academic.html` and `contact.html`: compatibility redirects for old links.

The owner confirmed expected PhD entry in September 2027. USTC’s official school name is School of Artificial Intelligence and Data Science (人工智能与数据科学学院), verified at https://saids.ustc.edu.cn/15407/list.htm. The undergraduate school is School of Artificial Intelligence and Computer Science (人工智能与计算机学院), Jiangnan University; no major is shown. Future research interests are distinguished from completed work. Add paper/code links only when their destinations are confirmed.

## Preview and publish

Run `python3 -m http.server 8765` in this repository and open `http://localhost:8765/`. If serving the parent `MyGit` folder instead, open `http://localhost:8765/unumbrela.github.io/`.

The existing Pages workflow publishes this repository when changes are pushed to `main`.

The sibling `unumbrela` repository contains the GitHub profile READMEs and a legacy copy of the site. This repository is the canonical website source. When retaining that legacy copy, synchronize the HTML pages, stylesheet, script, and favicon after website updates. Profile banner SVGs belong to `unumbrela` only.

The layout was inspired by the reference academic homepage; this implementation and its profile graphics were written afresh, without importing the reference site's code or personal assets.

## Visual direction

White and warm charcoal surfaces with orange accents, a fixed profile column on desktop, compact introductory prose, and publications grouped by research area. The existing portrait, framework figures, bilingual content, and academic claims are retained from the working copy. Figures open in an accessible dialog (Escape, close button, or backdrop to dismiss). A reduced-motion preference disables animated scrolling.

Reference: [Orange’s academic homepage](https://orangecc7.github.io/) and [profile README](https://github.com/orangecc7/orangecc7). Layout and visual hierarchy are adapted; source, illustrations, and personal content are authored for Zihao. Existing `#about` / `#publications` links still work, with `#about-me` / `#research` aliases.

GitHub profile content lives in the sibling repository’s `README.md` and `README_CN.md`; its two `profile-header-*.svg` files provide light/dark headers. Keep the profile’s links pointing to the canonical Pages site.

Framework images retain their actual aspect ratios. The figure dialog offers original CSS-pixel dimensions and a direct source-image link. Contacts use native clipboard access with a visible manual-copy fallback; update the button data attributes and titles together.
