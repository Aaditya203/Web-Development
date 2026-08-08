import './footer.css';

export function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="footer-container">
        <div className="footer-info">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <span className="footer-brand">AdityaRepo</span>. Built with React & TanStack Query.
          </p>
        </div>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
            GitHub
          </a>
          <a href="https://tanstack.com/query" target="_blank" rel="noopener noreferrer" className="footer-link">
            TanStack Docs
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
