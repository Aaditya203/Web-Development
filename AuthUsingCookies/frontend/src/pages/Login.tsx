import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        'http://localhost:3000/signin',
        {
          username: email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      console.log('Login response:', response.data);
      setSuccess('Successfully signed in! Redirecting...');
      setTimeout(() => {
        navigate('/user');
      }, 1000);
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="card-header">
          <div className="card-icon-badge">🔐</div>
          <h1 className="card-title">Welcome Back</h1>
          <p className="card-subtitle">Sign in with cookie-based authentication</p>
        </div>

        {error && <div className="alert alert-error">⚠️ {error}</div>}
        {success && <div className="alert alert-success">✓ {success}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email-input">
              Email / Username
            </label>
            <div className="input-wrapper">
              <input
                id="email-input"
                className="form-input"
                type="text"
                placeholder="name@example.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password-input">
              Password
            </label>
            <div className="input-wrapper">
              <input
                id="password-input"
                className="form-input"
                type="password"
                placeholder="••••••••"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="card-footer">
          Already authenticated? <Link to="/user">View Profile</Link>
        </div>
      </div>
    </div>
  );
}

