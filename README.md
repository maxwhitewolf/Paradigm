# Paradigm Website Clone

A modern, responsive clone of the [Paradigm](https://www.paradigm.xyz/) website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimalist UI inspired by Paradigm's website
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Modular React components for maintainability

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Development**: ESLint, Prettier

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage component
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Site footer
│   └── sections/
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About section
│       ├── Team.tsx         # Team section
│       ├── Portfolio.tsx    # Portfolio section
│       ├── Writing.tsx      # Writing section
│       ├── OpenSource.tsx   # Open source section
│       └── Careers.tsx      # Careers section
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd paradigm-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { /* your colors */ },
  accent: { /* your colors */ }
}
```

### Content
Update the content in each section component to match your needs.

### Styling
Modify `src/app/globals.css` for custom CSS and component styles.

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive navigation menu
- Adaptive grid layouts
- Touch-friendly interactions
- Optimized typography for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project can be deployed to any platform that supports Next.js static exports.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes. The original Paradigm website design and content belong to Paradigm Operations LP.

## 🙏 Acknowledgments

- [Paradigm](https://www.paradigm.xyz/) for the original design inspiration
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

## 📞 Support

If you have any questions or need help, please open an issue in the repository.
