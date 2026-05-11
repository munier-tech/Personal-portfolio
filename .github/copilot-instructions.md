<!-- Use this file to provide workspace-specific custom instructions to Copilot -->

# Developer Portfolio Setup & Maintenance

## Project Overview

This is a modern, responsive developer portfolio built with Next.js 14, React, TypeScript, and Tailwind CSS. It features smooth animations, dark mode support, a projects showcase, and a contact form.

## Key Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme Management**: next-themes

## Getting Started

### Prerequisites

- Node.js 16.x or higher installed

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### 1. Personal Information

Update these files with your details:

- **app/components/Navbar.tsx**: Logo/name
- **app/components/Hero.tsx**: Headline, CTA buttons, social links
- **app/components/Contact.tsx**: Email, phone, location
- **app/components/Footer.tsx**: Social links

### 2. Projects

Edit the `projects` array in **app/components/Projects.tsx** to showcase your work:

```typescript
{
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}
```

### 3. Colors & Theme

Edit **tailwind.config.js** to customize colors:

```javascript
colors: {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#ec4899',
}
```

### 4. Contact Form

The contact form in **app/components/Contact.tsx** includes email validation. To enable actual email sending:

1. Update the `handleSubmit` function
2. Use a service like SendGrid, Mailgun, or your own backend API

## Build & Deployment

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

### Deployment Options

- **Vercel** (recommended): Perfect for Next.js
- **Netlify**: Great alternative
- **Self-hosted**: Use any Node.js hosting

## Project Structure

```
app/
├── components/          # Reusable React components
│   ├── Navbar.tsx      # Navigation with dark mode
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── layout.tsx          # Root layout
├── page.tsx            # Main page
├── providers.tsx       # Theme provider setup
└── globals.css         # Global styles

.vscode/               # VS Code configuration
tailwind.config.js     # Tailwind CSS customization
next.config.js         # Next.js configuration
tsconfig.json          # TypeScript configuration
```

## Important Files

- **package.json**: Dependencies and scripts
- **README.md**: Full documentation
- **.env.example**: Environment variables template
- **tailwind.config.js**: Color and animation config

## Development Best Practices

1. **Use TypeScript**: All components are typed for better developer experience
2. **Keep Components Focused**: Each component has a single responsibility
3. **Use Framer Motion**: For smooth, professional animations
4. **Maintain Responsive Design**: Always test on mobile, tablet, and desktop
5. **Update Social Links**: Make sure all external links are correct

## Common Tasks

### Add a New Project

1. Edit `app/components/Projects.tsx`
2. Add to the `projects` array
3. Update project title, description, tags, and links

### Change Theme Colors

1. Edit `tailwind.config.js`
2. Modify the `colors` section
3. Update `gradient-text` in `globals.css` if needed

### Update Contact Information

1. Edit `app/components/Contact.tsx`
2. Update the `contactInfo` array
3. Change form submission logic if needed

### Deploy to Vercel

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click

## Troubleshooting

- **Styles not applying**: Run `npm run build` to rebuild
- **Dark mode not working**: Check that `next-themes` is installed
- **Animations stuttering**: Check Performance tab in DevTools
- **Form not submitting**: Verify API endpoint configuration

## Next Steps

1. Customize all personal information
2. Add your actual projects
3. Update social media links
4. Test responsive design
5. Deploy to production

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Last Updated**: 2024
