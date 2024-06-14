import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdEmail } from "react-icons/md";
import { FaBarcode } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getEmpresasUser } from "@/service/empresa";
import { useStore } from "@/store/user";
import { auth } from "@/config/firebase";
import { syncBuiltinESMExports } from "module";

const Empresas = () => {
  const navigate = useNavigate();
  const [empresasData, setEmpresasData] = useState<any>([]);
  const empresas = useStore((state: any) => state.empresas);
  const setEmpresas = useStore((state: any) => state.setEmpresas);
  const [userAuth, setUserAuth] = useState<any>(null);

  function handleSubmit() {
    navigate("/dashboard/RegistroEmpresa");
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user: any) => {
      setUserAuth(user);
      if (user) {
        const empresasDB = await getEmpresasUser(user.email);
        setEmpresas(empresasDB);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchEmpresas = async () => {
      const data = await empresas;
      setEmpresasData(data);
    };

    fetchEmpresas();
  }, [empresas]);

  const fetchEmpresas = async () => {
    const empresasDB = await getEmpresasUser(userAuth?.email ?? "");
    setEmpresas(empresasDB);
  };

  return (
    <div className="p-6 w-full ">
      <div className="p-7 flex justify-end mb-4">
        <Button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-800 text-5xl h-10 w-10 hover:bg-blue-500  rounded-full"
        >
          +
        </Button>
      </div>
      <h1 className="text-3xl text-white mb-4 font-bold -mt-20">
        Mis empresas
      </h1>
      <div className="space- p-4  w-full flex justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {empresasData.length > 0 ? (
            empresasData.map((empresa, index) => (
              <Card
                key={index}
                className="w-full flex flex-col justify-between"
              >
                <CardHeader>
                  <CardTitle>{empresa.nombreEmpresa}</CardTitle>
                  <CardDescription>
                    {empresa.descripcionEmpresa}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="flex space-x-2">
                    <MdEmail size={25} className="text-sky-500" />
                    <p>{empresa.correo}</p>
                  </div>
                  <div className="flex space-x-2">
                    <FaBarcode size={25} className="text-sky-500" />
                    <p>{empresa.rut}</p>
                  </div>
                  <div className="flex space-x-2">
                    <FaLocationDot size={25} className="text-sky-500" />
                    <p>{empresa.direccion}</p>
                  </div>
                  <div className="flex space-x-2">
                    <FaPhoneAlt size={20} className="text-sky-500" />
                    <p>{empresa.telefono}</p>
                  </div>
                </CardContent>
                <CardFooter className="mx-auto">
                  <div>
                    <Link
                      to={`/dashboard/empresas/${empresa.id}`}
                      className="mt-2  p-2 rounded-md text-white hover:text-black bg-slate-800 hover:bg-blue-500 text-lg"
                    >
                      Ver más
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p>No hay empresas registradas</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Empresas;
