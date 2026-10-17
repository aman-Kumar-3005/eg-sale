# Property catalogue UI

## Overview

Static property catalogue prototype with project filtering and browser-based price and EMI estimates. Project data is held in a JavaScript object.

## System architecture and modules

- `js/data.js`: `EGSALE_DATA` project records and display content.
- `js/app.js`: catalogue search/sort, detail modals, plot-cost calculator and form steps.
- `projects.html`, `project-detail.html` and `plots.html`: catalogue screens.
- `calculator.html`: estimate interface.

## Tech stack

HTML5, CSS3 and JavaScript. The application is static; there is no server API, database or dependency-install step.

## Local setup

Requires Python 3 for the local static server and a modern browser. No Node.js build step is required.

```sh
git clone https://github.com/shreyasingh3005/eg-sale.git
cd eg-sale
python3 -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000/>. External fonts, icons, embeds and remote images still need Internet access where referenced by the HTML.

## Implementation notes

The estimate uses hard-coded assumptions, not lender quotes. The registration flow generates a random reference in the browser; it does not reserve inventory or persist a registration. Existing draw/payment prompts and social-proof messages are UI content, not evidence of a functioning allocation or payment system. This repository documents the frontend prototype only.

## Manual checks

Check desktop and mobile navigation, page links, image loading and browser console errors. Use synthetic form values. Inspect the intended request or message before submitting; do not send test enquiries to the configured business contacts.
