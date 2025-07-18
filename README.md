# 🏛️ Hesed Church - Complete Blog System

A modern, responsive church website with a comprehensive blog management system built with React, featuring a warm and welcoming design that reflects the church's mission to honor God and make disciples.

## 🌟 Features

### 🎨 **Frontend Features**
- **Modern React Architecture** - Built with React 19, Vite, and React Router
- **Responsive Design** - Mobile-first approach with beautiful gradients and warm colors
- **Complete Church Website** - Home, About, Events, Contact, Volunteer, and Connect Group pages
- **Professional Blog System** - Category filtering, pagination, and individual post pages
- **SEO Optimized** - Dynamic meta tags, Open Graph, Twitter Cards, and structured data
- **Performance Optimized** - Lazy loading images, intersection observer, and performance monitoring
- **Accessibility Ready** - WCAG compliant with proper focus management and screen reader support

## Pages

- **Home**: Hero section, about preview, connect opportunities, events, current series, and social links
- **About**: Church information, mission, values, beliefs, and team members
- **Events**: Upcoming church events with detailed information
- **Contact**: Contact information and contact form
- **Volunteer**: Volunteer opportunities and ministry information
- **Connect Groups**: Information and signup form for connect groups

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd hesed-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Preloader.jsx   # Loading animation
│   └── ...             # Other section components
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Events.jsx      # Events page
│   ├── Contact.jsx     # Contact page
│   ├── Volunteer.jsx   # Volunteer page
│   └── ConnectGroup.jsx # Connect groups page
├── hooks/              # Custom React hooks
│   ├── useSmoothScroll.js
│   └── useBackToTop.js
└── ...
```

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **CSS**: Original styling preserved and adapted for React
- **JavaScript ES6+**: Modern JavaScript features

## Original Design

This React application is a faithful conversion of the original Hesed church website template, maintaining all the visual design and functionality while modernizing the codebase with React best practices.

---

## 🎉 **NEW: Complete Blog System Added!**

### 📝 **Blog Management System**
- **Rich Blog Editor** - HTML content editing with live preview
- **Category Management** - Multi-select categories with visual checkboxes
- **Tag System** - Flexible tagging with comma-separated input
- **Draft/Publish Workflow** - Save drafts and publish when ready
- **Featured Images** - Upload and display featured images for posts
- **Author Management** - Author information and avatars
- **Search & Filtering** - Advanced search and category filtering

### 🔐 **Admin Dashboard**
- **Secure Authentication** - Protected admin routes with login system
- **Dashboard Overview** - Statistics, recent posts, and quick actions
- **Post Management** - Create, edit, delete, and manage all blog posts
- **SEO Dashboard** - Comprehensive SEO analysis and optimization tools
- **Performance Monitoring** - Real-time performance metrics and tips
- **Responsive Admin UI** - Beautiful admin interface that works on all devices

### Admin Access
- **URL**: `http://localhost:5173/admin/login`
- **Email**: `admin@hesed.com`
- **Password**: `admin123`

## 🔍 **SEO Features**

- **Dynamic Meta Tags** - Title, description, and Open Graph tags for each page
- **Structured Data** - JSON-LD markup for better search engine understanding
- **Sitemap Generation** - Automatic XML sitemap creation
- **Performance Optimization** - Fast loading times and Core Web Vitals optimization
- **Social Media Ready** - Open Graph and Twitter Card support

## 📊 **Performance**

- **Lazy Loading** - Images load only when needed
- **Code Splitting** - Optimized bundle sizes
- **Performance Monitoring** - Real-time metrics in development
- **Optimized Images** - Proper sizing and compression
- **Efficient State Management** - Minimal re-renders with Zustand

## 🛠️ **Enhanced Technology Stack**

- **Frontend**: React 19, Vite, React Router
- **State Management**: Zustand
- **Styling**: CSS3 with CSS Grid and Flexbox
- **Rich Text Editor**: React Quill (with fallback HTML editor)
- **Performance**: Intersection Observer API, lazy loading
- **SEO**: Dynamic meta tags, structured data, sitemap generation
- **Backend Options**: Strapi CMS, Node.js + Express + MongoDB, or Supabase

## 📚 **Backend Setup**

See `BACKEND_SETUP_GUIDE.md` for detailed instructions on setting up:
- Strapi Headless CMS (Recommended)
- Node.js + Express + MongoDB
- Supabase with PostgreSQL

---

**Built with ❤️ for Hesed Church - Honoring God and Making Disciples**
