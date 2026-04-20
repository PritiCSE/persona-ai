const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/_/backend";

export async function fetchFromBackend(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Backend fetch failed: ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  getHealth: () => fetchFromBackend("/health"),
  getRoot: () => fetchFromBackend("/"),
  // Add more endpoints as your backend grows
};
