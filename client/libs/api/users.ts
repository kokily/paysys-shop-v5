import qs from 'qs';
import client from './client';

// Change Password API
export async function changePasswordAPI(password: string) {
  const response = await client.patch(`/users/password`, password);
  return response.data;
}

// List Users API
export type ListUsersQuery = {
  username?: string;
  cursor?: string;
};

export async function listUsersAPI(query: ListUsersQuery) {
  const queryString = qs.stringify(query);
  const response = await client.get<UserType[]>(`/users?${queryString}`);
  return response.data;
}

// Read User API
export async function readUserAPI(id: string) {
  const response = await client.get<UserType>(`/users/${id}`);
  return response.data;
}

// Remove User API
export async function removeUserAPI(id: string) {
  const response = await client.delete(`/users/${id}`);
}

// Set Admin API
export type SetAdminPayload = {
  id: string;
  isAdmin: boolean;
};

export async function setAdminAPI(payload: SetAdminPayload) {
  const response = await client.post('/users/admin', payload);
  return response.data;
}
