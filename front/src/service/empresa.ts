import { db } from "@/config/firebase";
import { setDoc, doc as docFirebase } from "firebase/firestore";
import { v4 as uuid } from "uuid"; 

export async function saveEmpresa(values) {
  const id = uuid();
  const docRef = docFirebase(db, "empresa", id); 
  const registroempresa = await setDoc(docRef, values);
}
