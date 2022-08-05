import qs from 'qs';
import client from './client';

export type AddAgreePayload = {
  name: string;
  sign: string;
  isAgree: boolean;
};

export type ListAgreesQuery = {
  name?: string;
  cursor?: string;
};

// Add Agree API
export async function addAgreeAPI(payload: AddAgreePayload) {
  const response = await client.post('/agrees', payload);
  return response.data;
}

// List Agrees API
export async function listAgreesAPI(query: ListAgreesQuery) {
  const queryString = qs.stringify(query);
  const response = await client.get<AgreeType[]>(`/agrees?${queryString}`);
  return response.data;
}

// Read Agree API
export async function readAgreeAPI(id: string) {
  const response = await client.get<AgreeType>(`/agrees/${id}`);
  return response.data;
}

// Remove Agree API
export async function removeAgreeAPI(id: string) {
  const response = await client.delete(`/agrees/${id}`);
  return response.data;
}
