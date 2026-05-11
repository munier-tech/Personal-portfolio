# Developer Portfolio

A beautiful, modern developer portfolio built with Next.js 14, React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, responsive design, and a contact form.

## 🌟 Features

- **Modern Design**: Clean and professional layout with gradient accents
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Dark Mode**: Built-in theme switching with `next-themes`
- **Fully Responsive**: Mobile-first design that works on all devices
- **Projects Showcase**: Display your best work with detailed project cards
- **Contact Form**: Easy-to-use contact form for visitor inquiries
- **Social Links**: Quick access to your social media profiles
- **Performance**: Optimized for fast loading and smooth user experience
- **TypeScript**: Fully typed codebase for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes
- **Form Handling**: React Built-in

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Clone or extract the project to your desired location
2. Navigate to the project directory:

   ```bash
   cd personal\ portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Building for Production

Build the project:

```bash
npm run build
# or
yarn build
```

Start the production server:

```bash
npm start
# or
yarn start
```

## 📁 Project Structure

```
app/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar with dark mode toggle
│   ├── Hero.tsx        # Hero section with CTA buttons
│   ├── Projects.tsx    # Projects showcase grid
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer with social links
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── providers.tsx       # Theme providers
└── globals.css         # Global styles

public/                 # Static assets (add images here)
```

## 🎨 Customization

### Update Personal Information

Edit the following files to add your information:

1. **Navbar** (`app/components/Navbar.tsx`):
   - Update the portfolio name/logo

2. **Hero** (`app/components/Hero.tsx`):
   - Change headline, description, and social links

3. **Projects** (`app/components/Projects.tsx`):
   - Update the `projects` array with your own projects
   - Add project titles, descriptions, technologies, and links

4. **Contact** (`app/components/Contact.tsx`):
   - Update contact information (email, phone, location)
   - Configure form submission logic

5. **Footer** (`app/components/Footer.tsx`):
   - Update social links and personal details

### Colors & Theme

Customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: '#6366f1',      // Change primary color
  secondary: '#8b5cf6',    // Change secondary color
  accent: '#ec4899',       // Change accent color
}
```

### Add Images

1. Place images in the `public` folder
2. Reference them in components using:
   ```jsx
   <Image src="/image-name.jpg" alt="Description" />
   ```

## 📝 Adding More Sections

To add a new section:

1. Create a new component in `app/components/`
2. Add it to the main `app/page.tsx`
3. Use consistent styling with existing components
4. Add smooth animations using Framer Motion

## 🌙 Dark Mode

Dark mode is automatically enabled based on system preferences. Users can toggle it using the sun/moon icon in the navbar.

## 📱 Responsive Design

The portfolio is fully responsive:

- Mobile: 320px and up
- Tablet: 768px and up
- Desktop: 1024px and up

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips for Success

- Keep projects updated with your latest work
- Use high-quality descriptions that highlight your skills
- Add relevant links to live projects and GitHub repositories
- Keep the portfolio simple and professional
- Regularly update contact information
- Test the contact form functionality
- Optimize images for web

## 🤝 Contributing

Feel free to customize and extend this portfolio for your needs!

## 📧 Support

For issues or questions, please reach out through the contact form on the portfolio.

---

**Happy building! 🚀**
