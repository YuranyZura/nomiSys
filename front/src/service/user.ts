import { db } from "@/config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function getUser() {
  //   const q = query(collection(db, "users"), where("capital", "==", true));
  const q = query(collection(db, "users"));

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs;
}
