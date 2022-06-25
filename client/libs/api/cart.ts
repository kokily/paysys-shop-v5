import client from './client';

export type AddCartPayload = {
  item_id: string;
  count: number;
  price: number;
};

// Add Cart API
export async function addCartAPI(payload: AddCartPayload) {
  const response = await client.post<CartType>('/cart', payload);
  return response.data;
}

// View Cart API
export async function viewCartAPI() {
  const response = await client.get<CartType>('/cart');
  return response.data;
}

// Remove Cart API
export async function removeCartAPI() {
  const response = await client.delete('/cart');
  return response.data;
}

// Remove One Cart API
export async function removeOneCartAPI(item_id: string) {
  const response = await client.patch<CartType>(`/cart/${item_id}`);
  return response.data;
}
