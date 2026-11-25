# Yasin Şerifhan Berberoğlu · Portfolio

Source for [yasinserifhan.github.io](https://yasinserifhan.github.io/), my portfolio and blog.
It's built with Jekyll and hosted on GitHub Pages, which builds the site automatically on every push to `master`.

## Sections

- **Home**: intro, availability, selected projects, experience, toolbox and latest writing.
- **Projects**: every project as a card, each with its own detail page.
- **About**: background, interests and what I'm looking for.
- **Writing**: blog posts.
- **Contact**: a [Formspree](https://formspree.io/) form plus email and LinkedIn.

## Where to edit things

| What | File |
|---|---|
| Name, tagline, availability, social links, Formspree ID, Analytics ID | `_config.yml` |
| Projects (one Markdown file each; `featured: true` puts it on the home page, `order` sorts it) | `_projects/*.md` |
| Experience timeline | `_data/experience.yml` |
| Toolbox / skills | `_data/skills.yml` |
| Blog posts | `_posts/YYYY-MM-DD-title.html` or `.md` |
| Styles (plain CSS, light and dark themes) | `assets/css/main.css` |
| CV | put a PDF at `assets/files/Yasin-Berberoglu-CV.pdf`; the "Download CV" buttons appear automatically |

### Adding a project

Create `_projects/my-project.md`:

```yaml
---
title: My Project
subtitle: Short context · stack
summary: One or two sentences for the card.
metric: "Headline result"
tags: [PyTorch, NLP]
repo: https://github.com/yasinserifhan/my-project   # leave out and set `private: true` if the code isn't public
role: Personal project
order: 7
featured: false
---

Longer write-up in Markdown.
```

## Local preview

With Docker (no Ruby install needed):

```bash
docker run --rm -it -p 4000:4000 -v "${PWD}:/srv/site" -v portfolio-gems:/usr/local/bundle -w /srv/site ruby:3.3 \
  sh -c "bundle install && bundle exec jekyll serve --host 0.0.0.0 --livereload"
```

Or with Ruby and Bundler installed: `bundle install`, then `bundle exec jekyll serve`.

Then open <http://localhost:4000>.

## Credits

Started from the [Clean Blog](https://github.com/StartBootstrap/startbootstrap-clean-blog-jekyll) Jekyll theme by Start Bootstrap (MIT); the current design and layouts are custom.
