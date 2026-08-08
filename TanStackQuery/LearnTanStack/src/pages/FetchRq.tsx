export default function FetchRq() {
  return (
    <div className="page-container" id="page-rq">
      <header className="page-header">
        <h1>TanStack Query</h1>
        <p className="page-subtitle">Declarative, async state synchronization and server state management.</p>
      </header>
      <main className="page-content">
        <div className="info-box accent-box">
          <code>{"useQuery({ queryKey, queryFn })"}</code>
          <p>Showcases automatic caching, background refetching, mutation helpers, and state persistence.</p>
        </div>
      </main>
    </div>
  );
}