import { Status } from "./category";

export interface IProduct {
  id: string;
  category_id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  slug: string;
  status: Status;
}
