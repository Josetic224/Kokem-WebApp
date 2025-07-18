import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/admin/dashboard';

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        navigate(from, { replace: true });
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-login__container">
        <div className="admin-login__header">
          <Link to="/" className="admin-login__logo">
            <img
              src="/images/kokem.png"
              alt="KOKEM"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div
              style={{
                display: 'none',
                color: '#1E3A8A',
                fontWeight: 'bold',
                fontSize: '2rem',
                padding: '1rem',
                border: '2px solid #1E3A8A',
                borderRadius: '8px',
                marginBottom: '2rem'
              }}
            >
              KOKEM
            </div>
          </Link>
          <h1>KOKEM Admin Login</h1>
          <p>Sign in to manage the KOKEM ministry website</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login__form">
          {error && (
            <div className="admin-login__error">
              {error}
            </div>
          )}

          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="admin@kokemfamily.top"
              className="h-full-width"
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
              className="h-full-width"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn--primary h-full-width"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="admin-login__footer">
          <p>Demo Credentials:</p>
          <p><strong>Email:</strong> admin@kokemfamily.top</p>
          <p><strong>Password:</strong> admin123</p>
          <Link to="/" className="admin-login__back">
            ← Back to KOKEM Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
