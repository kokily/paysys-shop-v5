import client from './client';

// Add Expense API
export async function addExpenseAPI(payload: ExpenseType) {
  const response = await client.post<WeddingType>('/expense', payload);
  return response.data;
}

// Remove Expense API
export async function removeExpenseAPI(id: string) {
  const response = await client.delete(`/expense/${id}`);
  return response.data;
}

// Update Expense API
export type UpdateExpenseType = {
  id: string;
} & ExpenseType;

export async function updateExpenseAPI(payload: UpdateExpenseType) {
  const response = await client.put('/expense', payload);
  return response.data;
}
