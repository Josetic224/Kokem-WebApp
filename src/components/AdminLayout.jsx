import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AdminLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="admin-layout">
      {/* Admin Header */}
      <header className="admin-header">
        <div className="admin-header__content">
          <div className="admin-header__left">
            <Link to="/" className="admin-header__logo">
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
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  padding: '0.5rem'
                }}
              >
                KOKEM
              </div>
            </Link>
            <h1 className="admin-header__title">KOKEM Admin Dashboard</h1>
          </div>
          
          <div className="admin-header__right">
            <span className="admin-header__user">
              Welcome, {user?.name}
            </span>
            <button 
              onClick={handleLogout}
              className="btn btn--small btn--stroke"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="admin-content">
        {/* Admin Sidebar */}
        <aside className="admin-sidebar">
          <nav className="admin-nav">
            <ul className="admin-nav__list">
              <li className={isCurrentPage('/admin/dashboard') ? 'active' : ''}>
                <Link to="/admin/dashboard">
                  <span className="admin-nav__icon">📊</span>
                  Dashboard
                </Link>
              </li>
              <li className={location.pathname.startsWith('/admin/posts') ? 'active' : ''}>
                <Link to="/admin/posts">
                  <span className="admin-nav__icon">📝</span>
                  Blog Posts
                </Link>
              </li>
              <li className={isCurrentPage('/admin/posts/new') ? 'active' : ''}>
                <Link to="/admin/posts/new">
                  <span className="admin-nav__icon">➕</span>
                  New Post
                </Link>
              </li>
              <li className={isCurrentPage('/admin/seo') ? 'active' : ''}>
                <Link to="/admin/seo">
                  <span className="admin-nav__icon">🔍</span>
                  SEO Dashboard
                </Link>
              </li>
              <li className={isCurrentPage('/admin/categories') ? 'active' : ''}>
                <Link to="/admin/categories">
                  <span className="admin-nav__icon">🏷️</span>
                  Categories
                </Link>
              </li>
              <li className={isCurrentPage('/admin/users') ? 'active' : ''}>
                <Link to="/admin/users">
                  <span className="admin-nav__icon">👥</span>
                  Users
                </Link>
              </li>
            </ul>
          </nav>
          
          <div className="admin-sidebar__footer">
            <Link to="/" className="admin-sidebar__website-link">
              <span className="admin-nav__icon">🌐</span>
              View Website
            </Link>
          </div>
        </aside>

        {/* Admin Main Content */}
        <main className="admin-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
