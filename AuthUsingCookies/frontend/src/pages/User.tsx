import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function User() {
  const [userId, setUserID] = useState<string | number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000/user', {
        withCredentials: true,
      })
      .then((response) => {
        setUserID(response.data.userId);
        setError(null);
      })
      .catch((err) => {
        console.error('Error fetching user:', err);
        setError('No active session found or invalid cookie token.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const logout = async () => {
    setLoggingOut(true);
    try {
      const response = await axios.post(
        'http://localhost:3000/logout',
        {},
        {
          withCredentials: true,
        }
      );
      console.log('Logout response:', response.data);
      setUserID(null);
      navigate('/');
    } catch (err) {
      console.error('Error logging out:', err);
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="card-header">
          <div className="profile-avatar-wrap">
            <div className="profile-avatar">👤</div>
            <div className="profile-status-dot" title="Active session"></div>
          </div>
          <h1 className="card-title">User Profile</h1>
          <p className="card-subtitle">Session Authenticated via Cookie</p>
        </div>

        {loading && (
          <div className="alert alert-success">
            <span>⏳ Loading session details...</span>
          </div>
        )}

        {error && (
          <div className="alert alert-error" style={{ marginBottom: '20px' }}>
            <span>⚠️ {error}</span>
          </div>
        )}

        {userId !== null && !loading && (
          <>
            <div className="info-tile">
              <span className="info-label">User Identifier</span>
              <span className="info-badge">ID: #{userId}</span>
            </div>

            <div className="info-tile">
              <span className="info-label">Cookie Status</span>
              <span style={{ color: '#34d399', fontSize: '13px', fontWeight: 600 }}>
                ● Active (JWT Verified)
              </span>
            </div>

            <button
              className="btn-danger"
              onClick={logout}
              disabled={loggingOut}
            >
              {loggingOut ? 'Logging out...' : 'Sign Out'}
            </button>
          </>
        )}

        {error && !loading && (
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <Link to="/" className="btn-secondary">
              Back to Login
            </Link>
          </div>
        )}

        <div className="card-footer">
          <Link to="/">← Go to Sign In page</Link>
        </div>
      </div>
    </div>
  );
}