import { IProduct } from "./product";

export interface ICategory {
  id: string;
  name: string;
  slug: string;
  status: Status;
}
export interface ICategoryWithProducts extends ICategory {
  products: IProduct[];
}

export type Status = "active" | "inactive" | "deleted";
