import { db } from "@/config/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getTareasByEmpresa = async (empresaId: string) => {
  const snapshot = await getDocs(
    query(collection(db, "tareas"), where("idEmpresa", "==", empresaId))
  );

  const tareasArray = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return tareasArray;
}

export const getTareasByEmpleado = async (empleadoId: string) => {
  const snapshot = await getDocs(
    query(collection(db, "tareas"), where("idEmpleado", "==", empleadoId))
  );

  const tareasArray = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return tareasArray;
}