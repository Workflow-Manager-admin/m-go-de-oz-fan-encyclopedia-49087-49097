import React, { useEffect, useState } from "react";
import { getWikiSection, saveWikiSection } from "../utils/api";
import { useParams } from "react-router-dom";

// PUBLIC_INTERFACE
function WikiEditor() {
  const { section } = useParams();
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getWikiSection(section).then((data) => setContent(data.text || ""));
  }, [section]);

  const handleChange = (e) => setContent(e.target.value);

  const handleSave = (e) => {
    e.preventDefault();
    saveWikiSection(section, content).then((ok) =>
      setStatus(ok ? "Saved!" : "Save failed.")
    );
  };

  return (
    <section>
      <h2>Edit Wiki Section: {section}</h2>
      <form onSubmit={handleSave}>
        <textarea
          rows={13}
          cols={67}
          value={content}
          onChange={handleChange}
          style={{ fontSize: "1rem", width: "98%" }}
        />
        <div>
          <button type="submit" className="btn-main" style={{ marginTop: 12 }}>
            Save Changes
          </button>
          <span className="wiki-status">{status}</span>
        </div>
      </form>
    </section>
  );
}

export default WikiEditor;
