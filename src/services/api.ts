import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
  orderBy,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

import { ICategory, Status } from "@/@types/category";
import { IProduct } from "@/@types/product";

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
  getProduct: async (slug: string) => {
    try {
      const productRef = collection(db, "products");
      const q = query(productRef, where("slug", "==", slug));
      const docSnap = await getDocs(q);
      const doc: QueryDocumentSnapshot<DocumentData, DocumentData> =
        docSnap.docs[0];
      const product: IProduct = {
        id: doc.id,
        name: doc.data().name,
        category_id: doc.data().category_id,
        description: doc.data().description,
        image_url: doc.data().image_url,
        price: doc.data().price,
        slug: doc.data().slug,
        status: doc.data().status,
      };

      return product;
    } catch (error) {
      console.log(error);
      throw new Error("Produto não encontrado");
    }
  },
};

export default api;
