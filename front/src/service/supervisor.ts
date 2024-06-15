import { db } from "@/config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getSupervisorByEmpresa = async (id: string) => {
  const snapshot = await getDocs(
    query(
      collection(db, "users"),
      where("empresa", "==", id),
      where("role", "==", "SUPERVISOR")
    )
  );

  const supervisorArray = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return supervisorArray[0];
};
