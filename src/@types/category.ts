export interface ICategory {
  id: string;
  name: string;
  slug: string;
  status: Status;
}

export type Status = "active" | "inactive" | "deleted";
