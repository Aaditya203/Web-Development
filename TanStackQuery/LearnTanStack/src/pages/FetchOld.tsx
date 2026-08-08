import { useEffect, useState } from "react";
import { getPosts } from "../api";
import "./FetchOld.css";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function FetchOld() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getPosts();
      // Since getPosts() returns response.data directly, res is the array of posts
      setPosts(res);
    } catch (e: any) {
      console.error(e);
      setError(e.message || "Something went wrong while fetching posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="page-container" id="page-old">
      <header className="page-header">
        <h1>Traditional Fetching</h1>
        <p className="page-subtitle">
          Standard API integration using React's built-in state hooks (<code>useState</code> + <code>useEffect</code>).
        </p>
      </header>
      
      <main className="page-content">
        {loading && (
          <div className="posts-grid" id="posts-loading-skeleton">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div className="skeleton-card" key={idx}>
                <div className="skeleton-badge"></div>
                <div className="skeleton-title"></div>
                <div className="skeleton-line medium"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line short"></div>
              </div>
            ))}
          </div>
        )}

        {error && !loading && (
          <div className="error-container" id="posts-error-view">
            <h2 className="error-title">Oops! Failed to load</h2>
            <p className="error-message">{error}</p>
            <button className="retry-button" onClick={fetchPosts}>
              Retry Fetching
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="posts-grid" id="posts-list-grid">
            {posts.slice(0, 12).map((post) => (
              <article className="post-card" key={post.id}>
                <span className="post-id-badge">POST #{post.id}</span>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}