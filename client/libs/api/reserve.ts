import client from './client';

export type AddReservePayload = {
  bill_id: string;
  reserve: number;
};

// Add Reserve API
export async function addReserveAPI(payload: AddReservePayload) {
  const response = await client.post<BillType>('/reserve', payload);
  return response.data;
}

// Remove Reserve API
export async function removeReserveAPI(id: string) {
  const response = await client.delete(`/reserve/${id}`);
  return response.data;
}
