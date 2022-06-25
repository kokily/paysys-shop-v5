import client from './client';

export type AuthPayload = {
  username: string;
  password: string;
};

// Login API
export async function loginAPI(payload: AuthPayload) {
  const response = await client.post<MeType>('/auth/login', payload);
  return response.data;
}

// Register API
export async function registerAPI(payload: AuthPayload) {
  const response = await client.post<MeType>('/auth/register', payload);
  return response.data;
}

// Logout API
export async function logoutAPI() {
  const response = await client.post('/auth/logout');
  return response.data;
}

// Check API
export async function checkAPI() {
  const response = await client.get<MeType>('/auth/check');
  return response.data;
}
