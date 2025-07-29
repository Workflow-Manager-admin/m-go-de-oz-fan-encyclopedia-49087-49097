import React, { useEffect, useState } from "react";
import { getMembers } from "../utils/api";

// PUBLIC_INTERFACE
function MemberProfiles() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMembers().then((data) => {
      setMembers(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <section>
      <h2>Band Members</h2>
      {loading ? (
        <p>Loading member profiles...</p>
      ) : (
        <div className="member-list">
          {members.length === 0 && <p>No members found.</p>}
          {members.map((member) => (
            <div className="member-card" key={member.id}>
              <img
                src={member.photo_url || "https://via.placeholder.com/120x120?text=Member"}
                alt={member.name}
                className="member-photo"
              />
              <div>
                <h3>{member.name}</h3>
                <p>Role: {member.role}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MemberProfiles;
