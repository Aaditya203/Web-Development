
export default function FetchOld() {
  return (
    <div className="page-container" id="page-old">
      <header className="page-header">
        <h1>Traditional Fetching</h1>
        <p className="page-subtitle">Standard API integration using React's built-in state hooks.</p>
      </header>
      <main className="page-content">
        <div className="info-box">
          <code>{"useEffect(() => { ... }, [])"}</code>
          <p>Shows standard implementation details of manual fetch calls, loading, and error states.</p>
        </div>
      </main>
    </div>
  );
}