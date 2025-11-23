import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Volumes.scss';

function Volumes() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch('/index/pieces-collections.json')
      .then(response => response.json())
      .then(data => setCollections(data))
      .catch(error => console.error('Error loading collections:', error));
  }, []);

  if (collections.length === 0) {
    return null;
  }

  return (
    <div className="volumes">
      <h4>Volumes</h4>
      <nav className="volumes-list">
        {collections.map((collection) => (
          <Link 
            key={collection.name} 
            to={`/reader/${collection.name}`}
            className="volume-link"
          >
            {collection.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Volumes;
