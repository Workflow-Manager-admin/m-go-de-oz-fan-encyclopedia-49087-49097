import React, { useEffect, useState } from "react";
import { getBandHistory } from "../utils/api";

// PUBLIC_INTERFACE
function BandHistory() {
  const [history, setHistory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBandHistory().then((data) => {
      setHistory(data.history || "");
      setLoading(false);
    });
  }, []);

  return (
    <section>
      <h2>Band History</h2>
      {loading ? (
        <p>Loading band history...</p>
      ) : (
        <div className="history-content">{history}</div>
      )}
    </section>
  );
}

export default BandHistory;
