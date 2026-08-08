import { useQuery } from "@tanstack/react-query"
import { getPostById } from "../api"
import { useParams, Link } from "react-router-dom"
import "./FetchOld.css"

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function FetchIndv() {
  const { id } = useParams<{ id: string }>()
  
  const { data: post, isLoading, isError, error, refetch } = useQuery<Post>({
    queryKey: ['post', id], // Dynamic query key
    queryFn: () => getPostById(id!),
    enabled: !!id,
  })

  return (
    <div className="page-container" id="page-indv">
      <div className="post-detail-container">
        
        {/* Back Link */}
        <Link to="/rq" className="back-button" id="back-to-list-link">
          <span>←</span> Back to list
        </Link>

        {/* Loading view */}
        {isLoading && (
          <div className="post-detail-card skeleton-card" style={{ height: '240px' }} id="post-detail-skeleton">
            <div className="skeleton-badge" style={{ width: '80px' }}></div>
            <div className="skeleton-title" style={{ width: '60%' }}></div>
            <div className="post-detail-divider"></div>
            <div className="skeleton-line medium"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
          </div>
        )}

        {/* Error view */}
        {isError && (
          <div className="error-container" id="post-detail-error">
            <h2 className="error-title">Oops! Failed to load post</h2>
            <p className="error-message">{(error as any)?.message || "Something went wrong."}</p>
            <button className="retry-button" onClick={() => refetch()}>
              Retry
            </button>
          </div>
        )}

        {/* Successful view */}
        {!isLoading && !isError && post && (
          <article className="post-detail-card" id={`post-detail-${post.id}`}>
            <div className="post-detail-meta">
              <span className="post-id-badge">POST #{post.id}</span>
              <span style={{ fontSize: '12px', opacity: 0.8 }}>User ID: {post.userId}</span>
            </div>
            
            <h1 className="post-title" style={{ fontSize: '28px', textTransform: 'capitalize' }}>
              {post.title}
            </h1>
            
            <div className="post-detail-divider"></div>
            
            <p className="post-body" style={{ fontSize: '16px', lineHeight: 1.7 }}>
              {post.body}
            </p>
          </article>
        )}
        
      </div>
    </div>
  )
}