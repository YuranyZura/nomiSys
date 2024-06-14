import { useNavigate } from "react-router-dom";
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

const Empresas = () => {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/dashboard/RegistroEmpresa");
  }
  const empresa = [
    {
      name: "Zoomac",
      description: "Construcción",
      email: "construccion@gmail.com",
      RUT: "1258",
      address: "Apartado CL 98 #12-23",
      phone: "321987456",
    },
    {
      name: "Inversiones Ahsarch S.A.S. Zomac",
      description: "Construcción",
      email: "ahsley3110@gmail.com",
      RUT: "901299575-5",
      address: "Chigorodó Urb Montecarlos Manzana B4 #26",
      phone: "3156987423",
    },
    {
      name: "Solo Maiz",
      description: "Venta de envueltos de choclo",
      email: "solomaiz@gmail.com",
      RUT: "02365",
      address: "Apartado Calle #3 Bloque",
      phone: "3225649807",
    },
  ];

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
          {empresa.map((empresa, index) => (
            <Card key={index} className="w-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle>{empresa.name}</CardTitle>
                <CardDescription>{empresa.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex space-x-2">
                  <MdEmail size={25} className="text-sky-500" />
                  <p>{empresa.email}</p>
                </div>
                <div className="flex space-x-2">
                  <FaBarcode size={25} className="text-sky-500" />
                  <p>{empresa.RUT}</p>
                </div>
                <div className="flex space-x-2">
                  <FaLocationDot size={25} className="text-sky-500" />
                  <p>{empresa.address}</p>
                </div>
                <div className="flex space-x-2">
                  <FaPhoneAlt size={20} className="text-sky-500" />
                  <p>{empresa.phone}</p>
                </div>
              </CardContent>
              <CardFooter className="mx-auto">
                <div>
                  <Button className="mt-2  bg-slate-800 hover:bg-blue-500 text-lg">
                    Ver más
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Empresas;
