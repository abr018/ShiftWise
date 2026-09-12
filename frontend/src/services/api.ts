const API_URL = "http://localhost:3000/api";

export async function getUsers() {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
}

export async function getCandidates() {
  const response = await fetch(`${API_URL}/candidates`);
  return response.json();
}

export async function getRecruiters() {
  const response = await fetch(`${API_URL}/recruiters`);
  return response.json();
}
export async function getJobs() {
  const response = await fetch(`${API_URL}/jobs`);
  return response.json();
}

export async function getApplications() {
  const response = await fetch(`${API_URL}/applications`);
  return response.json();
}

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Invalid email or password");
  }

  return response.json();
}