import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { blogPosts as initialPosts, blogCategories } from '../data/blogData';
import api from '../services/api';

// Generate unique ID for new posts
const generateId = () => {
  return Date.now() + Math.random().toString(36).substr(2, 9);
};

// Generate slug from title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

const useBlogStore = create(
  persist(
    (set, get) => ({
      // State
      posts: initialPosts,
      categories: blogCategories,
      loading: false,
      error: null,
      useAPI: false, // Toggle between mock data and API
  
  // Actions
  createPost: (postData) => {
    const newPost = {
      id: generateId(),
      slug: generateSlug(postData.title),
      publishedAt: new Date().toISOString(),
      ...postData
    };

    console.log('Creating new post:', newPost);
    console.log('Post status:', newPost.status);

    set((state) => {
      const updatedPosts = [newPost, ...state.posts];
      console.log('Updated posts array:', updatedPosts);
      return {
        posts: updatedPosts,
        error: null
      };
    });

    return newPost;
  },
  
  updatePost: (id, updates) => {
    set((state) => ({
      posts: state.posts.map(post => 
        post.id === id 
          ? { 
              ...post, 
              ...updates,
              slug: updates.title ? generateSlug(updates.title) : post.slug
            }
          : post
      ),
      error: null
    }));
  },
  
  deletePost: (id) => {
    set((state) => ({
      posts: state.posts.filter(post => post.id !== id),
      error: null
    }));
  },
  
  getPostById: (id) => {
    const { posts } = get();
    return posts.find(post => post.id === parseInt(id));
  },
  
  getPostBySlug: (slug) => {
    const { posts } = get();
    return posts.find(post => post.slug === slug);
  },
  
  getPublishedPosts: () => {
    const { posts } = get();
    const publishedPosts = posts
      .filter(post => post.status === 'published')
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    console.log('All posts:', posts);
    console.log('Published posts:', publishedPosts);

    return publishedPosts;
  },
  
  getPostsByCategory: (categorySlug) => {
    const { posts } = get();
    return posts.filter(post => 
      post.categories.some(cat => 
        cat.toLowerCase().replace(/\s+/g, '-') === categorySlug
      )
    );
  },
  
  getRecentPosts: (limit = 3) => {
    const { posts } = get();
    return posts
      .filter(post => post.status === 'published')
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, limit);
  },
  
  searchPosts: (searchTerm) => {
    const { posts } = get();
    const term = searchTerm.toLowerCase();
    return posts.filter(post =>
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.content.toLowerCase().includes(term) ||
      post.author.name.toLowerCase().includes(term) ||
      post.categories.some(cat => cat.toLowerCase().includes(term)) ||
      post.tags.some(tag => tag.toLowerCase().includes(term))
    );
  },
  
  // Statistics
  getStats: () => {
    const { posts } = get();
    const published = posts.filter(post => post.status === 'published');
    const drafts = posts.filter(post => post.status === 'draft');
    
    return {
      totalPosts: posts.length,
      publishedPosts: published.length,
      draftPosts: drafts.length,
      totalViews: Math.floor(Math.random() * 10000) + 5000 // Mock data
    };
  },
  
  // Loading and error states
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
  
  // Category management
  addCategory: (category) => {
    const newCategory = {
      id: generateId(),
      slug: generateSlug(category.name),
      color: category.color || '#2C5F5D',
      ...category
    };
    
    set((state) => ({
      categories: [...state.categories, newCategory]
    }));
    
    return newCategory;
  },
  
  updateCategory: (id, updates) => {
    set((state) => ({
      categories: state.categories.map(cat => 
        cat.id === id ? { ...cat, ...updates } : cat
      )
    }));
  },
  
  deleteCategory: (id) => {
    set((state) => ({
      categories: state.categories.filter(cat => cat.id !== id)
    }));
  },

  // API Integration Methods
  enableAPI: () => set({ useAPI: true }),
  disableAPI: () => set({ useAPI: false }),

  // Fetch posts from API
  fetchPosts: async () => {
    const { useAPI } = get();
    if (!useAPI) return;

    set({ loading: true, error: null });
    try {
      const posts = await api.blogPosts.getAll();
      set({ posts, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Fetch categories from API
  fetchCategories: async () => {
    const { useAPI } = get();
    if (!useAPI) return;

    set({ loading: true, error: null });
    try {
      const categories = await api.categories.getAll();
      set({ categories, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Create post via API
  createPostAPI: async (postData) => {
    const { useAPI } = get();
    if (!useAPI) return get().createPost(postData);

    set({ loading: true, error: null });
    try {
      const newPost = await api.blogPosts.create(postData);
      set((state) => ({
        posts: [newPost, ...state.posts],
        loading: false
      }));
      return newPost;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  // Update post via API
  updatePostAPI: async (id, updates) => {
    const { useAPI } = get();
    if (!useAPI) return get().updatePost(id, updates);

    set({ loading: true, error: null });
    try {
      const updatedPost = await api.blogPosts.update(id, updates);
      set((state) => ({
        posts: state.posts.map(post =>
          post.id === id ? updatedPost : post
        ),
        loading: false
      }));
      return updatedPost;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  // Delete post via API
  deletePostAPI: async (id) => {
    const { useAPI } = get();
    if (!useAPI) return get().deletePost(id);

    set({ loading: true, error: null });
    try {
      await api.blogPosts.delete(id);
      set((state) => ({
        posts: state.posts.filter(post => post.id !== id),
        loading: false
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  }
    }),
    {
      name: 'hesed-blog-storage', // unique name for localStorage key
      partialize: (state) => ({
        posts: state.posts,
        categories: state.categories
      }), // only persist posts and categories
    }
  )
);

export default useBlogStore;
