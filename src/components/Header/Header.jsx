import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import LampToggle from "../LampToggle/LampToggle";

import "./Header.scss";

function Header({ config }) {
  const location = useLocation();
  const params = useParams();
  const [isMobile, setIsMobile] = useState(false);
  if (!config?.site) return null;
  const { site } = config;
  const isHome = location.pathname === "/";
  const isCollection = location.pathname.startsWith("/reader/");
  
  const collection = isCollection 
    ? location.pathname.split('/reader/')[1] 
    : params.collection;

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 576);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let titleClass = "site-title";
  if (isMobile) {
    titleClass += " medium";
  } else {
    titleClass += isHome ? " large" : " small";
  }

  if (isCollection) {
    return (
      <header className="header-bar">
        <div className="header-left collection-view">
          <Link to="/" className="close-button">close</Link>
          <span className="separator">|</span>
          <span className="collection-title">{collection}</span>
        </div>
        <div className="header-right">
          <LampToggle />
        </div>
      </header>
    );
  }

  return (
    <header className="header-bar">
      <div className="header-left">
        <Link to="/" className={titleClass}>
          {site.title}
        </Link>
        <p className="site-author">by {site.author}</p>
      </div>
      <div className="header-right">
        <LampToggle />
      </div>
    </header>
  );
}

export default Header;