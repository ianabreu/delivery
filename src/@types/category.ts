export interface ICategory {
  id: string;
  name: string;
  status: Status;
}

export type Status = "active" | "inactive" | "deleted";
