import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useBlogStore from '../../stores/blogStore';

const BlogPostEditor = ({ mode = 'create' }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { 
    createPost, 
    updatePost, 
    getPostById, 
    categories 
  } = useBlogStore();

  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    categories: [],
    tags: [],
    status: 'draft',
    author: {
      name: 'Admin User',
      avatar: '/images/avatars/user-01.jpg'
    }
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (mode === 'edit' && id) {
      const post = getPostById(parseInt(id));
      if (post) {
        setFormData({
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          featuredImage: post.featuredImage,
          categories: post.categories,
          tags: post.tags,
          status: post.status,
          author: post.author
        });
      } else {
        navigate('/admin/posts');
      }
    }
  }, [mode, id, getPostById, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCategoryChange = (categoryName) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryName)
        ? prev.categories.filter(cat => cat !== categoryName)
        : [...prev.categories, categoryName]
    }));
  };

  const handleTagsChange = (e) => {
    const tagsString = e.target.value;
    const tagsArray = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData(prev => ({
      ...prev,
      tags: tagsArray
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.excerpt.trim()) {
      newErrors.excerpt = 'Excerpt is required';
    }

    if (!formData.content.trim()) {
      newErrors.content = 'Content is required';
    }

    if (formData.categories.length === 0) {
      newErrors.categories = 'At least one category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      if (mode === 'create') {
        const newPost = createPost(formData);
        navigate(`/admin/posts`);
      } else {
        updatePost(parseInt(id), formData);
        navigate(`/admin/posts`);
      }
    } catch (error) {
      console.error('Error saving post:', error);
      setErrors({ submit: 'Failed to save post. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = () => {
    setFormData(prev => ({ ...prev, status: 'draft' }));
    setTimeout(() => {
      document.querySelector('form').requestSubmit();
    }, 0);
  };

  const handlePublish = () => {
    setFormData(prev => ({ ...prev, status: 'published' }));
    setTimeout(() => {
      document.querySelector('form').requestSubmit();
    }, 0);
  };

  return (
    <div className="blog-post-editor">
      <div className="blog-post-editor__header">
        <h1>{mode === 'create' ? 'Create New Post' : 'Edit Post'}</h1>
        <div className="blog-post-editor__actions">
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="btn btn--stroke"
          >
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/posts')}
            className="btn btn--stroke"
          >
            Cancel
          </button>
        </div>
      </div>

      <div className={`blog-post-editor__content ${showPreview ? 'with-preview' : ''}`}>
        <div className="blog-post-editor__form">
          <form onSubmit={handleSubmit}>
            {errors.submit && (
              <div className="form-error form-error--submit">
                {errors.submit}
              </div>
            )}

            {/* Title */}
            <div className="form-field">
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`h-full-width ${errors.title ? 'error' : ''}`}
                placeholder="Enter post title..."
              />
              {errors.title && <span className="form-error">{errors.title}</span>}
            </div>

            {/* Excerpt */}
            <div className="form-field">
              <label htmlFor="excerpt">Excerpt *</label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                className={`h-full-width ${errors.excerpt ? 'error' : ''}`}
                rows="3"
                placeholder="Brief description of the post..."
              />
              {errors.excerpt && <span className="form-error">{errors.excerpt}</span>}
            </div>

            {/* Featured Image */}
            <div className="form-field">
              <label htmlFor="featuredImage">Featured Image URL</label>
              <input
                type="url"
                id="featuredImage"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleInputChange}
                className="h-full-width"
                placeholder="https://example.com/image.jpg"
              />
              {formData.featuredImage && (
                <div className="featured-image-preview">
                  <img src={formData.featuredImage} alt="Featured" />
                </div>
              )}
            </div>

            {/* Categories */}
            <div className="form-field">
              <label>Categories *</label>
              <div className="category-checkboxes">
                {categories.map(category => (
                  <label key={category.id} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.categories.includes(category.name)}
                      onChange={() => handleCategoryChange(category.name)}
                    />
                    <span className="checkbox-custom"></span>
                    {category.name}
                  </label>
                ))}
              </div>
              {errors.categories && <span className="form-error">{errors.categories}</span>}
            </div>

            {/* Tags */}
            <div className="form-field">
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags.join(', ')}
                onChange={handleTagsChange}
                className="h-full-width"
                placeholder="Enter tags separated by commas..."
              />
              <small>Separate tags with commas (e.g., faith, community, prayer)</small>
            </div>

            {/* Content */}
            <div className="form-field">
              <label htmlFor="content">Content *</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                className={`h-full-width blog-content-editor ${errors.content ? 'error' : ''}`}
                rows="20"
                placeholder="Write your blog post content here... You can use HTML tags for formatting."
              />
              {errors.content && <span className="form-error">{errors.content}</span>}
              <small>You can use HTML tags for formatting (e.g., &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;strong&gt;, etc.)</small>
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button
                type="button"
                onClick={handleSaveDraft}
                disabled={loading}
                className="btn btn--stroke"
              >
                {loading ? 'Saving...' : 'Save as Draft'}
              </button>
              <button
                type="button"
                onClick={handlePublish}
                disabled={loading}
                className="btn btn--primary"
              >
                {loading ? 'Publishing...' : 'Publish'}
              </button>
            </div>
          </form>
        </div>

        {/* Preview */}
        {showPreview && (
          <div className="blog-post-editor__preview">
            <div className="preview-header">
              <h3>Preview</h3>
            </div>
            <div className="preview-content">
              <article className="blog-post-preview">
                {formData.featuredImage && (
                  <div className="preview-featured-image">
                    <img src={formData.featuredImage} alt={formData.title} />
                  </div>
                )}
                
                <div className="preview-meta">
                  <div className="preview-categories">
                    {formData.categories.map((category, index) => (
                      <span key={index} className="preview-category">
                        {category}
                      </span>
                    ))}
                  </div>
                  <span className="preview-date">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                
                <h1 className="preview-title">{formData.title || 'Untitled Post'}</h1>
                
                <div className="preview-author">
                  <img 
                    src={formData.author.avatar} 
                    alt={formData.author.name}
                    className="preview-author-avatar"
                  />
                  <span className="preview-author-name">By {formData.author.name}</span>
                </div>
                
                <div className="preview-excerpt">
                  <p className="lead">{formData.excerpt}</p>
                </div>
                
                <div 
                  className="preview-body"
                  dangerouslySetInnerHTML={{ __html: formData.content }}
                />
                
                {formData.tags.length > 0 && (
                  <div className="preview-tags">
                    <h4>Tags:</h4>
                    <div className="tag-list">
                      {formData.tags.map((tag, index) => (
                        <span key={index} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostEditor;
