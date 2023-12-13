import { ICategory, Status } from "@/@types/category";
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
          let category = {
            id: doc.id,
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
};

export default api;
