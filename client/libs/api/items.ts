import qs from 'qs';
import client from './client';

// List Items API
export type ListItemsQuery = {
  name?: string;
  cursor?: string;
};

export async function listItemsAPI(query: ListItemsQuery) {
  const queryString = qs.stringify(query);
  const response = await client.get<ItemType[]>(`/items?${queryString}`);
  return response.data;
}

// Read Item API
export async function readItemAPI(id: string) {
  const response = await client.get<ItemType>(`/items/${id}`);
  return response.data;
}

// Add Item API
export type AddItemPayload = {
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: number;
};

export async function addItemAPI(payload: AddItemPayload) {
  const response = await client.post<ItemType>('/items', payload);
  return response.data;
}

// Remove Item API
export async function removeItemAPI(id: string) {
  const response = await client.delete(`/items/${id}`);
  return response.data;
}

// Update Item API
export type UpdateItemPayload = {
  id: string;
} & AddItemPayload;

export async function updateItemAPI(payload: UpdateItemPayload) {
  const { id, name, divide, native, unit, price } = payload;
  const response = await client.patch(`/items/${id}`, {
    name,
    divide,
    native,
    unit,
    price,
  });
  return response.data;
}
