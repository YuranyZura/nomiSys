import { db } from "@/config/firebase";
import {
  setDoc,
  doc as docFirebase,
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { getUserByEmail } from "./user";

export async function saveEmpresa(values) {
  const id = uuid();
  const docRef = docFirebase(db, "empresa", id);
  const registroempresa = await setDoc(docRef, values);
}

export async function getEmpresasUser(userEmail: string) {
  const userDB = await getUserByEmail(userEmail);
  const snapshot = await getDocs(
    query(collection(db, "empresa"), where("userDoc", "==", userDB.doc))
  );
  const empresas = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return empresas;
}
