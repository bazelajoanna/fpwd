# Lucchese Product Page

A product page for Lucchese boots built with Vite, TypeScript, Alpine.js, and Liquid.js.

## 🚀 Features

- **Interactive Product Gallery**: Dynamic image gallery with thumbnails and main image display
- **Size Selection Modal**: Full-screen modal for choosing boot size, width, and toe+heel options
- **Real-time Price Updates**: Price updates based on selected variants
- **Dynamic Content**: Product data loaded from JSON files
- **Smooth Interactions**: Alpine.js powered reactive components

## 🛠️ Tech Stack

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **Alpine.js** - Lightweight reactive framework
- **Liquid.js** - Template engine for dynamic content
- **Tailwind CSS** - Utility-first CSS framework

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd fpwd
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.liquid      # Navigation component
│   └── Product.liquid     # Main product page component
├── main.ts                # Application entry point
├── style.css              # Global styles
└── alpinejs.d.ts          # TypeScript declarations for Alpine.js
```

## 🔧 Configuration

### Adding New Products

1. Create a new JSON file in the `public/` directory
2. Follow the same structure as `priscilla-suede.json`
3. Update the fetch URL in `main.ts`

### Customizing Styles

- Modify Tailwind classes in the Liquid templates
- Add custom CSS in `src/style.css`
- Update component-specific styles inline
