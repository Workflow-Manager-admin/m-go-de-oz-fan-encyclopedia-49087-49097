import React, { useEffect, useState } from "react";
import { getUserProfile, updateUserProfile } from "../utils/api";

// PUBLIC_INTERFACE
function UserProfile() {
  const [profile, setProfile] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    getUserProfile().then((data) => setProfile(data));
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(profile).then((ok) => {
      setStatus(ok ? "Profile updated!" : "Update failed.");
    });
  };

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h2>Your Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label>
          Display Name
          <input
            type="text"
            name="display_name"
            value={profile.display_name || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Bio
          <textarea
            name="bio"
            rows={3}
            value={profile.bio || ""}
            onChange={handleChange}
          />
        </label>
        <button className="btn-main" type="submit">
          Save
        </button>
        <span className="profile-status">{status}</span>
      </form>
    </section>
  );
}

export default UserProfile;
