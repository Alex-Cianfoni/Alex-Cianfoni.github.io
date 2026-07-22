# Aquitania-Inspired Portfolio

A static multi-page portfolio prepared for GitHub Pages.

## Where to edit information

Open the HTML files in VS Code and search for:

```html
EDIT HERE
```

Each page includes comments marking the content that can be replaced. There are also commented examples showing how to add another job, school, skill, project, or lab item.

## Pages

- `index.html` — homepage, introduction, and featured areas
- `about.html` — biography and areas of focus
- `resume.html` — experience, education, and skills
- `portfolio.html` — project cards
- `lab.html` — current projects, research interests, and tools
- `404.html` — missing-page screen
- `style.css` — colors, fonts, borders, and layout
- `js/script.js` — automatic copyright year

## Important HTML comment format

Comments look like this and do not appear on the public website:

```html
<!-- EDIT HERE: Replace this sentence. -->
```

Do not delete opening or closing HTML tags unless you understand the page structure.

## GitHub Pages

Publish from the `main` branch and repository root (`/`). Keep `index.html` and `style.css` at the top level of the repository.


## Dynamic features

The site now includes browser-based interactions while remaining compatible with GitHub Pages:

- Mobile navigation menu
- Active page highlighting
- Scroll-reveal animations
- Reading-progress bar
- Project category filters
- Back-to-top button
- Smooth page transitions
- Reduced-motion accessibility support

To change project filters, edit `portfolio.html`. Each project card uses a
`data-category` attribute, for example:

```html
<article class="block project-card" data-category="software security">
```

A card may have more than one category separated by spaces.
