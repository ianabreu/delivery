import { ICategory, Status } from "@/@types/category";
import { IProduct } from "@/@types/product";
import { db } from "@/lib/firebase";
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const api = {
  getCategories: async (status: Status = "active") => {
    const q = query(
      collection(db, "categories"),
      where("status", "==", status),
      orderBy("name", "asc")
    );
    let categories: ICategory[] = [];
    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(
        (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
          let category: ICategory = {
            id: doc.id,
            slug: doc.data().slug,
            name: doc.data().name,
            status: doc.data().status,
          };
          categories.push(category);
        }
      );
      return categories;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  getProducts: async (status: Status = "active") => {
    const q = query(
      collection(db, "products"),
      where("status", "==", status),
      orderBy("name", "asc")
    );
    let products: IProduct[] = [];
    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(
        (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
          let product: IProduct = {
            id: doc.id,
            category_id: doc.data().category_id,
            slug: doc.data().slug,
            name: doc.data().name,
            price: doc.data().price,
            description: doc.data().description,
            image_url: doc.data().image_url,
            status: doc.data().status,
          };
          products.push(product);
        }
      );
      return products;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};

export default api;
