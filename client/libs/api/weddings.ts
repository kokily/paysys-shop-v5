import qs from 'qs';
import client from './client';

// List Weddings API
export type ListWeddingsQuery = {
  date?: string;
  cursor?: string;
};

export async function listWeddingsAPI(query: ListWeddingsQuery) {
  const queryString = qs.stringify(query);
  const response = await client.get<WeddingType[]>(`/weddings?${queryString}`);
  return response.data;
}

// Read Wedding API
export async function readWeddingAPI(id: string) {
  const response = await client.get<{
    wedding: WeddingType;
    convention: ConventionType;
    company: CompanyType;
    event: EventType;
    hanbok: HanbokType;
    meal: MealType;
    present: PresentType;
    reserve: ReserveType;
    prepayment: PrepaymentType;
  }>(`/weddings/${id}`);
  return response.data;
}
