import qs from 'qs';
import { toast } from 'react-toastify';
import client from './client';

export type ListMenuQuery = {
  name?: string;
  divide?: string;
  native?: string;
  cursor?: string;
};

// List Menu API
export async function listMenuAPI(query: ListMenuQuery) {
  const queryString = qs.stringify(query);
  const response = await client.get<ItemType[]>(`/items?${queryString}`);
  return response.data;
}

// Read Menu API
export async function readMenuAPI(id: string) {
  const response = await client.get<ItemType>(`/items/${id}`);
  return response.data;
}
