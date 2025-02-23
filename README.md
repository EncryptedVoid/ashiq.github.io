# Personal Portfolio Website

A modern, responsive portfolio website built with React, featuring interactive animations, responsive design, and a comprehensive showcase of professional work.

## 🚀 Features

- **Responsive Design**: Seamlessly adapts to all device sizes with dedicated mobile and desktop components
- **Interactive UI**: Smooth animations and transitions powered by Framer Motion
- **Dynamic Sections**:
  - Hero section with particle effects
  - Skills showcase with interactive cards
  - Project portfolio with detailed case studies
  - Experience timeline
  - Education & certifications
  - Interactive contact section
- **Dark Mode Optimized**: Built with a dark theme and glass morphism effects
- **Performance Focused**: Optimized loading with code splitting and lazy loading
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Craco
- **Development**:
  - ESLint
  - Prettier
  - Git

## 📦 Project Structure

```
src/
├── components/         # Reusable UI components
├── features/          # Feature-specific components
│   ├── hero/
│   ├── skills/
│   ├── projects/
│   └── ...
├── hooks/             # Custom React hooks
├── styles/            # Global styles and theme
├── utils/            # Utility functions
└── data/             # Static data and content
```

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/YourUsername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_PUBLIC_URL=your-domain.com
```

### Customization

- Edit `src/data/` files to update content
- Modify `src/styles/theme.js` for theme customization
- Update `tailwind.config.js` for styling customization

## 📱 Mobile Support

The website features dedicated mobile components with optimized:

- Touch interactions
- Responsive layouts
- Performance optimizations
- Mobile-specific animations

## 🎨 Design System

Built with a comprehensive design system featuring:

- Consistent spacing using golden ratio
- Typography scale
- Color palette
- Animation timings
- Component variants
- Interactive states

## 👤 Author

**Ashiq Gazi**

- Website: [ashiq.live](https://ashiq.live)
- LinkedIn: [@ashiq-gazi](https://linkedin.com/in/ashiq-gazi)
- GitHub: [@EncryptedVoid](https://github.com/EncryptedVoid)

## 🙏 Acknowledgments

Special thanks to:

- [shadcn/ui](https://ui.shadcn.com/) for UI components
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
- [Framer Motion](https://www.framer.com/motion/) for animations
