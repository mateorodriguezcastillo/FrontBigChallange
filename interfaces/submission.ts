export interface Submission {
  id: number;
  title: string;
  info: string;
  symptoms: string;
  status: Status;
  created_at: Date;
  patient: Doctor;
  doctor: Doctor;
  prescription: null;
}

export interface Doctor {
  id: number;
  role_id: number;
  name: string;
  email: string;
  email_verified_at: Date;
  created_at: Date;
  updated_at: Date;
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
