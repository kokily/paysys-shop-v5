import client from './client';

export type AddSignPayload = {
  weddingId: string;
  sex: string;
  image: string;
};

// Add Sign API
export async function addSignAPI(payload: AddSignPayload) {
  const response = await client.post('/sign', payload);
  return response.data;
}

// Remove Sign API
export async function removeSignAPI(id: string) {
  const response = await client.delete(`/sign/${id}`);
  return response.data;
}

export type S3ReturnType = {
  key: string;
  url: string;
};

// Image Upload
export async function imageUploadAPI(payload: FormData) {
  const response = await client.post<S3ReturnType>('/upload', payload);
  return response.data;
}
