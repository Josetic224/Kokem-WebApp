# 🚀 Hesed Church Blog - Backend Setup Guide

## 📋 Overview

This guide provides step-by-step instructions for setting up the backend for the Hesed Church blog system. We recommend **Strapi** for the best balance of features and ease of use.

## 🎯 Option A: Strapi Headless CMS (RECOMMENDED)

### Step 1: Install Strapi

```bash
# Navigate to your project root (outside hesed-react)
cd /home/olive_thinkpad/Downloads/Hesed_1_0_0

# Create Strapi backend
npx create-strapi-app@latest hesed-backend --quickstart

# This will:
# - Create a new Strapi project
# - Install dependencies  
# - Start the admin panel at http://localhost:1337/admin
```

### Step 2: Create Admin User

1. Open `http://localhost:1337/admin` in your browser
2. Create your admin account
3. Complete the setup wizard

### Step 3: Configure Content Types

#### A. Create Blog Post Content Type

1. Go to **Content-Types Builder** → **Create new collection type**
2. Name: `blog-post` (plural: `blog-posts`)
3. Add these fields:

```
- title (Text, Required, Short text)
- slug (UID, Required, Attached field: title)
- excerpt (Text, Required, Long text)
- content (Rich text, Required)
- featuredImage (Media, Single media, Images only)
- status (Enumeration, Values: draft, published, Default: draft)
- publishedAt (Date & time)
- tags (JSON)
```

4. **Save** the content type

#### B. Create Category Content Type

1. **Content-Types Builder** → **Create new collection type**
2. Name: `category` (plural: `categories`)
3. Add these fields:

```
- name (Text, Required, Short text, Unique)
- slug (UID, Required, Attached field: name)
- color (Text, Default value: #2C5F5D)
```

4. **Save** the content type

#### C. Add Relations

1. Edit **Blog Post** content type
2. Add field: `categories` (Relation, Many-to-many with Category)
3. Add field: `author` (Relation, Many-to-one with User from users-permissions)
4. **Save**

### Step 4: Configure Permissions

#### A. Public Role Permissions
1. **Settings** → **Users & Permissions** → **Roles** → **Public**
2. Enable these permissions:
   - **Blog-post**: `find`, `findOne`
   - **Category**: `find`
   - **Upload**: `find`

#### B. Authenticated Role Permissions
1. **Settings** → **Users & Permissions** → **Roles** → **Authenticated**
2. Enable ALL permissions for:
   - **Blog-post**: All actions
   - **Category**: All actions
   - **Upload**: All actions

### Step 5: Add Sample Data

#### A. Create Categories
1. **Content Manager** → **Categories** → **Create new entry**
2. Add these categories:

```
- Name: Sermons, Color: #2C5F5D
- Name: Community News, Color: #E07A5F
- Name: Events, Color: #3D405B
- Name: Devotionals, Color: #2C5F5D
- Name: Youth, Color: #E07A5F
- Name: Prayer, Color: #2C5F5D
```

#### B. Create Sample Blog Posts
1. **Content Manager** → **Blog Posts** → **Create new entry**
2. Fill in the fields and set status to "published"
3. Create 2-3 sample posts for testing

### Step 6: Enable React Frontend API Integration

In your React app (`hesed-react`), update the blog store to use the API:

```javascript
// In any component or initialization file
import useBlogStore from './stores/blogStore';

// Enable API mode
const { enableAPI, fetchPosts, fetchCategories } = useBlogStore();

// Enable API and fetch data
enableAPI();
fetchPosts();
fetchCategories();
```

### Step 7: Test the Integration

1. **Start Strapi**: `npm run develop` (in hesed-backend folder)
2. **Start React**: `npm run dev` (in hesed-react folder)
3. **Test API endpoints**:
   - `http://localhost:1337/api/blog-posts?populate=*`
   - `http://localhost:1337/api/categories`

---

## 🔧 Option B: Node.js + Express + MongoDB

### Step 1: Setup Project

```bash
# Create backend directory
mkdir hesed-backend
cd hesed-backend

# Initialize project
npm init -y

# Install dependencies
npm install express mongoose cors dotenv multer bcryptjs jsonwebtoken
npm install -D nodemon
```

### Step 2: Create Basic Structure

```
hesed-backend/
├── models/
│   ├── BlogPost.js
│   ├── Category.js
│   └── User.js
├── routes/
│   ├── blogPosts.js
│   ├── categories.js
│   └── auth.js
├── middleware/
│   └── auth.js
├── uploads/
├── .env
└── server.js
```

### Step 3: Database Models

**models/BlogPost.js:**
```javascript
const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  featuredImage: { type: String },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  publishedAt: { type: Date },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  tags: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('BlogPost', blogPostSchema);
```

### Step 4: API Routes

**routes/blogPosts.js:**
```javascript
const express = require('express');
const BlogPost = require('../models/BlogPost');
const router = express.Router();

// GET /api/blog-posts
router.get('/', async (req, res) => {
  try {
    const { status, category, search } = req.query;
    let query = {};
    
    if (status) query.status = status;
    if (category) query.categories = category;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }
    
    const posts = await BlogPost.find(query)
      .populate('categories')
      .populate('author', 'name email')
      .sort({ createdAt: -1 });
      
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/blog-posts
router.post('/', async (req, res) => {
  try {
    const post = new BlogPost(req.body);
    if (post.status === 'published') {
      post.publishedAt = new Date();
    }
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
```

---

## 🌐 Option C: Supabase

### Step 1: Setup Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Get your project URL and API key

### Step 2: Install Supabase Client

```bash
cd hesed-react
npm install @supabase/supabase-js
```

### Step 3: Create Database Tables

Run this SQL in Supabase SQL Editor:

```sql
-- Categories table
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(255) NOT NULL UNIQUE,
  color VARCHAR(7) DEFAULT '#2C5F5D',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image TEXT,
  status VARCHAR(20) DEFAULT 'draft',
  published_at TIMESTAMP,
  tags JSONB,
  author_id UUID REFERENCES auth.users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Junction table for blog_posts and categories
CREATE TABLE blog_post_categories (
  blog_post_id INTEGER REFERENCES blog_posts(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (blog_post_id, category_id)
);
```

### Step 4: Configure Supabase Client

```javascript
// src/services/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);
```

---

## 🚀 Next Steps After Backend Setup

1. **Update React Frontend** to use your chosen backend
2. **Test CRUD Operations** through the admin interface
3. **Add Image Upload** functionality
4. **Implement Authentication** for admin users
5. **Add SEO Features** (meta tags, sitemap)
6. **Deploy Backend** to your hosting platform
7. **Configure CORS** for production

## 📞 Support

If you encounter any issues during setup:

1. Check the console for error messages
2. Verify API endpoints are working
3. Ensure CORS is properly configured
4. Test with sample data first

---

**🎉 Once your backend is set up, your Hesed Church blog system will be fully functional with real data persistence!**
