# 🔧 Hesed Church Blog - Troubleshooting Guide

## 🐛 Common Issues and Solutions

### Issue: "My blog post doesn't appear after creating it"

This is the most common issue. Here are the steps to troubleshoot:

#### **Step 1: Check Post Status**
- When creating a post, make sure you click **"Publish"** not just "Save as Draft"
- Only published posts appear on the main blog page (`/blog`)
- Draft posts only appear in the admin area (`/admin/posts`)

#### **Step 2: Verify Post Creation**
1. Go to `/admin/posts` to see all posts (drafts and published)
2. Look for your new post in the list
3. Check the status column - it should say "published"
4. If it says "draft", click the edit button and publish it

#### **Step 3: Check Browser Console**
1. Open browser developer tools (F12)
2. Go to Console tab
3. Create a new post and look for these messages:
   ```
   Creating new post: {title: "Your Title", status: "published", ...}
   Post status: published
   Updated posts array: [...]
   ```

#### **Step 4: Clear Browser Storage**
If posts still don't appear:
1. Open browser developer tools (F12)
2. Go to Application tab → Storage → Local Storage
3. Find `hesed-blog-storage` and delete it
4. Refresh the page
5. Try creating a new post

#### **Step 5: Force Refresh**
- Press `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac) to hard refresh
- Or click the refresh button in the admin posts page

---

## 🔍 Debugging Steps

### Check Blog Store State
Open browser console and run:
```javascript
// Check all posts in store
console.log('All posts:', JSON.parse(localStorage.getItem('hesed-blog-storage')));

// Check published posts
window.useBlogStore.getState().getPublishedPosts();
```

### Verify Post Data Structure
A valid blog post should have:
```javascript
{
  id: "unique-id",
  title: "Post Title",
  slug: "post-title",
  excerpt: "Post excerpt",
  content: "Post content",
  status: "published", // Important!
  publishedAt: "2024-01-01T00:00:00.000Z",
  categories: ["Category Name"],
  tags: ["tag1", "tag2"],
  author: {
    name: "Author Name",
    avatar: "/path/to/avatar.jpg"
  },
  featuredImage: "/path/to/image.jpg"
}
```

---

## 🚨 Emergency Fixes

### Reset Blog Data
If everything is broken, reset the blog data:
```javascript
// In browser console
localStorage.removeItem('hesed-blog-storage');
window.location.reload();
```

### Add Test Post Manually
```javascript
// In browser console
const testPost = {
  id: Date.now(),
  title: "Test Post",
  slug: "test-post",
  excerpt: "This is a test post",
  content: "<p>This is test content</p>",
  status: "published",
  publishedAt: new Date().toISOString(),
  categories: ["Sermons"],
  tags: ["test"],
  author: {
    name: "Admin User",
    avatar: "/images/avatars/user-01.jpg"
  },
  featuredImage: "/images/sample-image.jpg"
};

// Add to store
window.useBlogStore.getState().createPost(testPost);
```

---

## 📝 Step-by-Step Blog Post Creation

### Correct Process:
1. **Login** to admin at `/admin/login`
2. **Navigate** to "New Post" or `/admin/posts/new`
3. **Fill out all required fields**:
   - Title (required)
   - Excerpt (required)
   - Content (required)
   - At least one category (required)
4. **Add optional fields**:
   - Featured image URL
   - Tags (comma-separated)
5. **Click "Publish"** (not "Save as Draft")
6. **Verify** the post appears in `/admin/posts` with "published" status
7. **Check** the main blog page at `/blog`

### Common Mistakes:
- ❌ Clicking "Save as Draft" instead of "Publish"
- ❌ Not filling required fields (title, excerpt, content, categories)
- ❌ Not waiting for the form to submit completely
- ❌ Refreshing the page before the post is saved

---

## 🔧 Technical Issues

### Issue: Posts disappear after page refresh
**Solution**: This was fixed with localStorage persistence. If it still happens:
1. Check if `zustand/middleware` is properly imported
2. Verify the persist configuration in `blogStore.js`

### Issue: Form validation errors
**Solution**: Make sure all required fields are filled:
- Title: Must not be empty
- Excerpt: Must not be empty  
- Content: Must not be empty
- Categories: At least one must be selected

### Issue: Images not loading
**Solution**: 
- Use full URLs for featured images (e.g., `https://example.com/image.jpg`)
- Or use relative paths to images in the `public` folder (e.g., `/images/sample-image.jpg`)

---

## 🆘 Getting Help

### Check These First:
1. **Browser Console** - Look for error messages
2. **Network Tab** - Check for failed requests
3. **Local Storage** - Verify data is being saved
4. **Post Status** - Ensure posts are published, not draft

### Debug Information to Collect:
- Browser and version
- Error messages from console
- Steps you took before the issue
- Screenshot of the problem
- Current URL when issue occurs

### Quick Test:
1. Go to `/admin/posts/new`
2. Fill in: Title="Test", Excerpt="Test", Content="Test"
3. Select one category
4. Click "Publish"
5. Go to `/blog` - your post should appear

---

## ✅ Verification Checklist

After creating a post, verify:
- [ ] Post appears in `/admin/posts` with "published" status
- [ ] Post appears on main blog page `/blog`
- [ ] Post can be opened by clicking on it
- [ ] Post shows correct title, excerpt, and content
- [ ] Categories and tags are displayed correctly
- [ ] Author information is shown
- [ ] Featured image loads (if provided)

---

**If you're still having issues after following this guide, the problem might be more complex. Check the browser console for specific error messages and ensure all required fields are properly filled when creating posts.**
