# Jekyll Theme Gallery

A beautiful, responsive gallery site for showcasing Jekyll themes with navigation and filtering capabilities.

## Features

- 🎨 Modern dark mode design with gradients and glassmorphism
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🔍 Category-based filtering
- ⚡ Fast and lightweight
- 🎯 SEO optimized
- 🌐 GitHub Pages ready

## Getting Started

### Prerequisites

- Ruby 2.7 or higher
- Bundler

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000`

## Customization

### Adding New Themes

Edit `_data/themes.yml` to add new themes to the gallery:

```yaml
- name: Your Theme Name
  description: Theme description
  author: Author Name
  category: Blog
  preview_image: https://example.com/image.jpg
  demo_url: https://example.com/demo
  download_url: https://github.com/user/repo
  features:
    - Feature 1
    - Feature 2
```

### Modifying Colors

Edit the CSS variables in `assets/css/main.css` to change the color scheme:

```css
:root {
    --color-primary: #667eea;
    --color-secondary: #764ba2;
    /* ... more variables */
}
```

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and save
4. Your site will be available at `https://username.github.io/repository-name`

### Other Hosting

Build the site:
```bash
bundle exec jekyll build
```

Upload the contents of the `_site` directory to your hosting provider.

## License

This project is open source and available under the MIT License.

## Credits

Built with Jekyll and ❤️
