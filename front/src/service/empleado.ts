import { db } from "@/config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getEmpleadosByEmpresa = async (empresaId: string) => {
  const snapshot = await getDocs(
    query(collection(db, "employees"), where("empresa", "==", empresaId))
  );

  const empleadosArray = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return empleadosArray;
};


