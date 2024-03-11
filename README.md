# Joyful Childhood Care Foundation Website

The website for the Joyful Childhood Care Foundation (https://joyfulchildhoodcare.org) built using [Astro](https://astro.build/) using 
[AlpineJS](https://alpinejs.dev/) and [TailwindCSS](https://tailwindcss.com/).  The website uses the [StaticCMS](https://www.staticcms.org/)
built-in, serverless Content Management System that works directly on the static files (markdown, json) in this git repository (`/src/content/` directory).

![image](https://github.com/Joyful-Childhood-Care/website/assets/7526014/81cb2696-34c3-489c-8f4b-8e7eefaaf14f)


## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
│   ├── admin/
│   |    |── index.html (StaticCMS page)
│   |    └── collections.json (StaticCMS collection definitions, symlinked from ../../collections.json)
│   └── ... other static resources that are served as-is
├── src/
│   ├── components/
│   |   └── ... Astro components used throughout the website
│   ├── content/
│   |   |── config.js (Astro content config, derived from ../../collections.json)
│   │   └── ... Content files (markdown and json) used to define content in pages, projects, job positions, etc
│   ├── layouts/
│   │   └── ... Astro layouts
│   └── pages/
│       └── ... Astro pages
├── collections.json (Content collection definitions, used by StaticCMS and Astro ./src/content/config.js)
└── package.json
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Building & Deploying

To build the site, run the `npm run build` command and the deploy the generated `./dist/` directory.  The site will need to be 
rebuilt after adding and/or updating any content.  Currently, the site is hosted by Netlify and is automatically rebuilt when 
changes are committed to the `main` branch in this repository.
