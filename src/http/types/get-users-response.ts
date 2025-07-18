import type { User } from './user';

export interface GetUsersResponse {
  clients: User[];
  totalPages: number;
  currentPage: number;
}
