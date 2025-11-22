import "./Navigation.scss";
import React from 'react';
import { NavLink } from "react-router-dom";


function Navigation() {
  const pagesIndexPath = '/index/pages.json';
  const [pages, setPages] = React.useState([]);

  React.useEffect(() => {
    fetch(pagesIndexPath)
      .then(response => response.json())
      .then(data => setPages(data))
      .catch(error => console.error('Error loading pages:', error));
  }, []);

  return (
    <nav>
      <NavLink key="home" to="/">
        Home
      </NavLink>
      {pages.map((page) => (
        <NavLink key={page.slug} to={`/${page.slug}`}>
          {page.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;
