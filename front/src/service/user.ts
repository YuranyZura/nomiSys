import { db } from "@/config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function getUserByEmail(email: string) {
  const usersCollection = collection(db, "users");
  const q = query(usersCollection, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const userDB = querySnapshot.docs.map((doc) => doc.data())[0];
  return userDB;
}
