
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";


function Header({ site }) {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("ode-dark-mode") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("ode-dark-mode", dark);
  }, [dark]);

  if (!site) return null;

  return (
    <header className="header-bar">
      <div className="header-left">
        <Link to="/" className="site-title">
          {site.title}
        </Link>
        <p className="site-author">by {site.author}</p>
      </div>
      <div className="header-right">
        <button
          className="dark-toggle-btn"
          onClick={() => setDark((d) => !d)}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {dark ? "Dusk" : "Dawn"}
        </button>
      </div>
    </header>
  );
}

export default Header;