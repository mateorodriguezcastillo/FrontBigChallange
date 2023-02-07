export interface Submission {
  id: number;
  title: string;
  info: string;
  symptoms: string;
  status: Status;
  created_at: Date;
  patient: User;
  doctor?: User;
  prescription?: null;
}

export interface User {
  id: number;
  role_id?: number;
  role_name: string;
  name: string;
  email: string;
  phone?: string;
  height?: number;
  weight?: number;
  other_info?: string;
  isProfileCompleted?: boolean;
  email_verified_at?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export enum Status {
  InProgress = "in_progress",
  Pending = "pending",
  Done = "done",
}

export interface Pagination {
  count: number;
  total: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  links: Links;
}

export interface Links {
  previous: string;
  next: string;
}
