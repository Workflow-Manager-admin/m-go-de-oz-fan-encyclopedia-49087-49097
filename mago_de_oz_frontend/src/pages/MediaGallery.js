import React, { useEffect, useState } from "react";
import { getMedia } from "../utils/api";

// PUBLIC_INTERFACE
function MediaGallery() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMedia().then((data) => {
      setMedia(data || []);
      setLoading(false);
    });
  }, []);

  // Display images and videos differently
  return (
    <section>
      <h2>Media Gallery</h2>
      {loading ? (
        <p>Loading media...</p>
      ) : (
        <div className="media-list">
          {media.length === 0 && <p>No media found.</p>}
          {media
            .filter((m) => m.type === "image")
            .map((m) => (
              <img
                key={m.id}
                src={m.url}
                alt={m.caption || "Band media"}
                className="media-img"
              />
            ))}
          {media
            .filter((m) => m.type === "video")
            .map((m) => (
              <video
                key={m.id}
                src={m.url}
                className="media-video"
                controls
                title={m.caption}
                style={{ maxWidth: "340px", margin: "18px" }}
              />
            ))}
        </div>
      )}
    </section>
  );
}

export default MediaGallery;
