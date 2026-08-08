export default function Home() {
  return (
    <div className="page-container" id="page-home">
      <header className="page-header">
        <h1>Welcome to <span className="gradient-text">AdityaRepo</span></h1>
        <p className="page-subtitle">A modern space for exploring TanStack Query and state management patterns.</p>
      </header>
      <main className="page-content">
        <div className="card-grid">
          <div className="card">
            <span className="card-badge">Traditional</span>
            <h2>FetchOld</h2>
            <p>Inspect standard useEffect fetching mechanisms and their trade-offs.</p>
          </div>
          <div className="card accent-card">
            <span className="card-badge dynamic-badge">Query</span>
            <h2>FetchRq</h2>
            <p>Experience auto-caching, sync-on-focus, and state query performance.</p>
          </div>
        </div>
      </main>
    </div>
  );
}