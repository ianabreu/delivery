import { IProduct } from "./product";

export interface ICategory {
  id: string;
  name: string;
  slug: string;
  status: Status;
}
export interface ICategoryWithProducts {
  id: string;
  name: string;
  slug: string;
  status: Status;
  products: IProduct[];
}

export type Status = "active" | "inactive" | "deleted";
