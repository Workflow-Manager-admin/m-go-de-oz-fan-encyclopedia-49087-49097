import React, { useEffect, useState } from "react";
import { getAlbums } from "../utils/api";

// PUBLIC_INTERFACE
function AlbumCatalog({ search }) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlbums(search).then((data) => {
      setAlbums(data || []);
      setLoading(false);
    });
  }, [search]);

  return (
    <section>
      <h2>Albums</h2>
      {loading ? (
        <p>Loading albums...</p>
      ) : (
        <div className="albums-list">
          {albums.length === 0 && <p>No albums found.</p>}
          {albums.map((album) => (
            <div className="album-card" key={album.id}>
              <img
                src={album.cover_url || "https://via.placeholder.com/140x140?text=Album+Cover"}
                alt={album.title}
                className="album-cover"
              />
              <div>
                <h3>{album.title}</h3>
                <p>Year: {album.release_year}</p>
                <p>{album.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default AlbumCatalog;
