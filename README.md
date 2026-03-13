# thequantai.in

Corporate website for **[TheQuantAI](https://thequantai.in)** — making quantum computing accessible to every developer.

## 🌐 Live Site

**[https://thequantai.in](https://thequantai.in)**

## About

This repository contains the source code for TheQuantAI's corporate landing page. The site introduces our mission, team, and two product verticals:

- **[TheQuantCloud](https://thequantcloud.com)** — Quantum Computing as a Service
- **[TheQuantDefense](https://thequantdefense.com)** — Quantum solutions for defense & aerospace

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Markup** | HTML5 |
| **Styling** | CSS3 (custom properties, responsive grid) |
| **Scripting** | Vanilla JavaScript |
| **Analytics** | Plausible Analytics |
| **Hosting** | GitHub Pages |
| **CI/CD** | GitHub Actions (`deploy.yml`) |
| **DNS** | GoDaddy (A + CNAME records) |

## Development

```bash
# Clone
git clone https://github.com/TheQuantAI/thequantai.in.git
cd thequantai.in

# Serve locally
python -m http.server 8000
# Open http://localhost:8000
```

## Deployment

Pushes to `main` automatically deploy via GitHub Actions to GitHub Pages with the custom domain `thequantai.in`.

## Related Repos

| Repository | Description |
|------------|-------------|
| [quantsdk](https://github.com/TheQuantAI/quantsdk) | Core quantum computing SDK |
| [thequantcloud.com](https://github.com/TheQuantAI/thequantcloud.com) | TheQuantCloud product website |
| [thequantdefense.com](https://github.com/TheQuantAI/thequantdefense.com) | TheQuantDefense coming-soon page |

## License

All rights reserved. © 2025 TheQuantAI.
