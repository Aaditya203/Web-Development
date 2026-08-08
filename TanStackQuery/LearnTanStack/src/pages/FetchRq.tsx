
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getPosts, pagination } from '../api';
import './FetchOld.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';



export default function FetchRq() {
  const [page, setPage] = useState(1); // Default to page 1 for JSONPlaceholder
  
  const { data: posts = [], isLoading, isError, error, refetch, isFetching } = useQuery<any[]>({
    queryKey: ['posts', page],
    queryFn: () => pagination(page),
    placeholderData: keepPreviousData,
  });

  return (
    <div className="page-container" id="page-rq">
      <header className="page-header">
        <h1>TanStack Query</h1>
        <p className="page-subtitle">
          Declarative, async state synchronization using the <code>useQuery</code> hook.
        </p>
      </header>
      
      <main className="page-content">
        {isLoading && (
          <div className="posts-grid" id="rq-posts-loading-skeleton">
            {Array.from({ length: 4 }).map((_, idx) => (
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

        {isError && (
          <div className="error-container" id="rq-posts-error-view">
            <h2 className="error-title">Oops! Failed to load</h2>
            <p className="error-message">{(error as any)?.message || "Something went wrong while fetching posts."}</p>
            <button className="retry-button" onClick={() => refetch()}>
              Retry Fetching
            </button>
          </div>
        )}

        {!isLoading && !isError && (
          <>
            <div className="posts-grid" id="rq-posts-list-grid">
              {posts.map((post) => (
                <NavLink 
                  to={`${post.id}`} 
                  key={post.id} 
                  className="post-card-link"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
                >
                  <article className="post-card" style={{ width: '100%' }}>
                    <span className="post-id-badge">POST #{post.id}</span>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-body">{post.body}</p>
                  </article>
                </NavLink>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination-container" id="posts-pagination">
              <button 
                className="pagination-button" 
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1 || isFetching}
              >
                ← Prev
              </button>
              
              <span className="pagination-info">
                {isFetching ? "Loading..." : `Page ${page}`}
              </span>
              
              <button 
                className="pagination-button" 
                onClick={() => setPage((prev) => prev + 1)}
                disabled={posts.length < 3 || isFetching}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
