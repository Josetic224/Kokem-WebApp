// Strapi API Configuration
const API_BASE_URL = 'http://localhost:1337/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }
  return response.json();
};

// Helper function to format Strapi data
const formatStrapiData = (data) => {
  if (Array.isArray(data)) {
    return data.map(item => ({
      id: item.id,
      ...item.attributes,
      // Handle relations
      categories: item.attributes.categories?.data?.map(cat => cat.attributes.name) || [],
      author: item.attributes.author?.data?.attributes || null,
      featuredImage: item.attributes.featuredImage?.data?.attributes?.url || null
    }));
  } else {
    return {
      id: data.id,
      ...data.attributes,
      categories: data.attributes.categories?.data?.map(cat => cat.attributes.name) || [],
      author: data.attributes.author?.data?.attributes || null,
      featuredImage: data.attributes.featuredImage?.data?.attributes?.url || null
    };
  }
};

// Blog Posts API
export const blogPostsAPI = {
  // Get all published blog posts
  getPublished: async () => {
    const response = await fetch(
      `${API_BASE_URL}/blog-posts?filters[status][$eq]=published&populate=*&sort=publishedAt:desc`
    );
    const data = await handleResponse(response);
    return formatStrapiData(data.data);
  },

  // Get all blog posts (admin)
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/blog-posts?populate=*&sort=createdAt:desc`);
    const data = await handleResponse(response);
    return formatStrapiData(data.data);
  },

  // Get single blog post by slug
  getBySlug: async (slug) => {
    const response = await fetch(
      `${API_BASE_URL}/blog-posts?filters[slug][$eq]=${slug}&populate=*`
    );
    const data = await handleResponse(response);
    return data.data.length > 0 ? formatStrapiData(data.data[0]) : null;
  },

  // Get single blog post by ID
  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/blog-posts/${id}?populate=*`);
    const data = await handleResponse(response);
    return formatStrapiData(data.data);
  },

  // Create new blog post
  create: async (postData) => {
    const response = await fetch(`${API_BASE_URL}/blog-posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          ...postData,
          publishedAt: postData.status === 'published' ? new Date().toISOString() : null
        }
      })
    });
    const data = await handleResponse(response);
    return formatStrapiData(data.data);
  },

  // Update blog post
  update: async (id, postData) => {
    const response = await fetch(`${API_BASE_URL}/blog-posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          ...postData,
          publishedAt: postData.status === 'published' ? new Date().toISOString() : null
        }
      })
    });
    const data = await handleResponse(response);
    return formatStrapiData(data.data);
  },

  // Delete blog post
  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/blog-posts/${id}`, {
      method: 'DELETE'
    });
    return handleResponse(response);
  },

  // Search blog posts
  search: async (searchTerm) => {
    const response = await fetch(
      `${API_BASE_URL}/blog-posts?filters[$or][0][title][$containsi]=${searchTerm}&filters[$or][1][excerpt][$containsi]=${searchTerm}&filters[$or][2][content][$containsi]=${searchTerm}&populate=*`
    );
    const data = await handleResponse(response);
    return formatStrapiData(data.data);
  }
};

// Categories API
export const categoriesAPI = {
  // Get all categories
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/categories?sort=name:asc`);
    const data = await handleResponse(response);
    return data.data.map(item => ({
      id: item.id,
      ...item.attributes
    }));
  },

  // Create category
  create: async (categoryData) => {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: categoryData })
    });
    const data = await handleResponse(response);
    return { id: data.data.id, ...data.data.attributes };
  },

  // Update category
  update: async (id, categoryData) => {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: categoryData })
    });
    const data = await handleResponse(response);
    return { id: data.data.id, ...data.data.attributes };
  },

  // Delete category
  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
      method: 'DELETE'
    });
    return handleResponse(response);
  }
};

// Media API
export const mediaAPI = {
  // Upload file
  upload: async (file) => {
    const formData = new FormData();
    formData.append('files', file);

    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: 'POST',
      body: formData
    });
    
    const data = await handleResponse(response);
    return data[0]; // Strapi returns array of uploaded files
  },

  // Get uploaded files
  getFiles: async () => {
    const response = await fetch(`${API_BASE_URL}/upload/files`);
    return handleResponse(response);
  }
};

export default {
  blogPosts: blogPostsAPI,
  categories: categoriesAPI,
  media: mediaAPI
};
