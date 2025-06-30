export type TPageProps = {
  params: Record<string, string | undefined>;
  searchParams: Record<string, string | undefined>;
};

export enum Role {
  CUSTOMER = "customer",
  ADMIN = "admin",
}


export type TSort = {
  sortBy: string;
  sortAs: 'ASC' | 'DESC';
};

export type TListConfig = {
  page?: number;
  limit?: number;
  search?: string;
  filter?: string;
};

export type TErrorConfig = {
  message: string;
  ok: boolean;
  status: number;
};