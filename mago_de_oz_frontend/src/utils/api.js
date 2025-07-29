const API_ROOT = process.env.REACT_APP_API_ROOT || "http://localhost:8000";

// PUBLIC_INTERFACE
export async function getAlbums(query = "") {
  const url = `${API_ROOT}/albums${query ? "?search=" + encodeURIComponent(query) : ""}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  return res.json();
}

// PUBLIC_INTERFACE
export async function getSongs(query = "") {
  const url = `${API_ROOT}/songs${query ? "?search=" + encodeURIComponent(query) : ""}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  return res.json();
}

// PUBLIC_INTERFACE
export async function getBandHistory() {
  const res = await fetch(`${API_ROOT}/wiki/history`);
  if (!res.ok) return {};
  return res.json();
}

// PUBLIC_INTERFACE
export async function getMembers() {
  const res = await fetch(`${API_ROOT}/members`);
  if (!res.ok) return [];
  return res.json();
}

// PUBLIC_INTERFACE
export async function getMedia() {
  const res = await fetch(`${API_ROOT}/media`);
  if (!res.ok) return [];
  return res.json();
}

// PUBLIC_INTERFACE
export async function getUserProfile() {
  const token = localStorage.getItem("jwt_token");
  if (!token) return null;
  const res = await fetch(`${API_ROOT}/profile`, {
    headers: { Authorization: "Bearer " + token },
  });
  if (!res.ok) return null;
  return res.json();
}

// PUBLIC_INTERFACE
export async function updateUserProfile(profile) {
  const token = localStorage.getItem("jwt_token");
  const res = await fetch(`${API_ROOT}/profile`, {
    method: "PUT",
    headers: {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  });
  return res.ok;
}

// PUBLIC_INTERFACE
export async function getWikiSection(section) {
  const res = await fetch(`${API_ROOT}/wiki/${section}`);
  if (!res.ok) return { text: "" };
  return res.json();
}

// PUBLIC_INTERFACE
export async function saveWikiSection(section, text) {
  const token = localStorage.getItem("jwt_token");
  const res = await fetch(`${API_ROOT}/wiki/${section}`, {
    method: "PUT",
    headers: {
      "Authorization": "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  return res.ok;
}

// PUBLIC_INTERFACE
export async function login(username, password) {
  const res = await fetch(`${API_ROOT}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) return false;
  const data = await res.json();
  if (data.token) {
    localStorage.setItem("jwt_token", data.token);
    return true;
  }
  return false;
}

// PUBLIC_INTERFACE
export async function register(username, password, email) {
  const res = await fetch(`${API_ROOT}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, email }),
  });
  return res.ok;
}
