import { useStore } from "@/store/user";
import { useParams } from "react-router-dom";

const Empresa = () => {
  const { id } = useParams();
  const empresas = useStore((state: any) => state.empresas);
  const empresa = empresas.find((empresa: any) => empresa.id === id);
  return (
    <div>
      {empresa ? (
        <div>
          <h1>{empresa.nombreEmpresa}</h1>
          <p>{empresa.descripcionEmpresa}</p>
          <p>{empresa.direccion}</p>
          <p>{empresa.correo}</p>
          <p>{empresa.telefono}</p>
          <p>{empresa.rut}</p>
        </div>
      ) : (
        <p>Empresa no encontrada</p>
      )}
    </div>
  );
};

export default Empresa;
