import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

import { ICategory, ICategoryWithProducts, Status } from "@/@types/category";
import { IProduct } from "@/@types/product";

// const getCategories = async (status: Status = "active") => {
//   const q = query(
//     collection(db, "categories"),
//     where("status", "==", status),
//     orderBy("name", "asc")
//   );
//   let categories: ICategory[] = [];
//   try {
//     const querySnapshot = await getDocs(q);

//     querySnapshot.forEach(
//       (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
//         let category: ICategory = {
//           id: doc.id,
//           slug: doc.data().slug,
//           name: doc.data().name,
//           status: doc.data().status,
//         };
//         categories.push(category);
//       }
//     );
//     return categories;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };
// const getProducts = async (status: Status = "active") => {
//   const q = query(
//     collection(db, "products"),
//     where("status", "==", status),
//     orderBy("name", "asc")
//   );
//   let products: IProduct[] = [];
//   try {
//     const querySnapshot = await getDocs(q);

//     querySnapshot.forEach(
//       (doc: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
//         let product: IProduct = {
//           id: doc.id,
//           category_id: doc.data().category_id,
//           slug: doc.data().slug,
//           name: doc.data().name,
//           price: doc.data().price,
//           description: doc.data().description,
//           image_url: doc.data().image_url,
//           status: doc.data().status,
//         };
//         products.push(product);
//       }
//     );
//     return products;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// };
const getProduct = async (slug: string) => {
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
};
const getCategoriesWithProducts = async (status: Status = "active") => {
  const categoryQuery = query(
    collection(db, "categories"),
    where("status", "==", status),
    orderBy("name", "asc")
  );

  let categories: ICategoryWithProducts[] = [];
  try {
    const categorySnapshot = await getDocs(categoryQuery);
    for (const doc of categorySnapshot.docs) {
      const productsFiltred = await getProductByCategory(doc.id);
      let category: ICategoryWithProducts = {
        id: doc.id,
        slug: doc.data().slug,
        name: doc.data().name,
        status: doc.data().status,
        products: [...productsFiltred],
      };

      categories.push(category);
    }

    return categories;
  } catch (error) {
    console.log(error);
    return categories;
  }
};
const getProductByCategory = async (category_id: string) => {
  const q = query(
    collection(db, "products"),
    where("status", "==", "active"),
    where("category_id", "==", category_id),
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
    return [];
  }
};

export {
  // getCategories,
  // getProducts,
  getProduct,
  getCategoriesWithProducts,
  getProductByCategory,
};
