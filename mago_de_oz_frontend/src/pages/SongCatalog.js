import React, { useEffect, useState } from "react";
import { getSongs } from "../utils/api";

// PUBLIC_INTERFACE
function SongCatalog({ search }) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSongs(search).then((data) => {
      setSongs(data || []);
      setLoading(false);
    });
  }, [search]);

  return (
    <section>
      <h2>Songs</h2>
      {loading ? (
        <p>Loading songs...</p>
      ) : (
        <div className="songs-list">
          {songs.length === 0 && <p>No songs found.</p>}
          <ul>
            {songs.map((song) => (
              <li key={song.id}>
                <strong>{song.title}</strong>
                {song.album && <>{" "}· Album: <span>{song.album}</span></>}
                {" "}· <span>{song.duration || "--:--"}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default SongCatalog;
