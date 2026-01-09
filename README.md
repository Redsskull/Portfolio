# Portfolio Website

Source files for my personal portfolio website.

**Live site:** [https://nathanielivry.io](https://nathanielivry.io)

## About

This is my portfolio showcasing my work as a backend developer focused on distributed systems and intelligent software. The site features my projects, background, and technical skills.

## Built With

This site is built using [rssg](https://github.com/radleylewis/rssg) - a static site generator created by [Radley Lewis](https://github.com/radleylewis). Thank you Radley for creating such a clean, straightforward tool!

## Structure
```
portfolio/
├── pages/          # Markdown content (my writing)
├── static/         # Images and CSS
├── templates/      # HTML templates
└── dist/          # Generated site (not in repo)
```

## Building Locally
```bash
# Build the site
rssg build

# Preview locally
cd dist && python -m http.server 8000
```

## Deployment

The `dist/` folder is automatically deployed to Netlify on every push to main.

## License

The content of this portfolio (my writing, projects, etc.) is © Nathaniel Ivry.

Built with rssg, which is licensed under GPL-3.0.
