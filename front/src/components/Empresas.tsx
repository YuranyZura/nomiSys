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
    <div className="p-6 w-full bg-red-600">
      <div className="p-7 bg-yellow-300 flex justify-end mb-4">
        <Button
          onClick={handleSubmit}
          type="submit"
          className="bg-blue-800 hover:bg-blue-500 text-lg"
        >
          Registrar empresa
        </Button>
      </div>
      <h1 className="text-3xl text-white mb-4">Empresas</h1>
      <div className="space- p-4 bg-black w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {empresa.map((empresa, index) => (
            <Card key={index} className="w-full">
              <CardHeader>
                <CardTitle>{empresa.name}</CardTitle>
                <CardDescription>{empresa.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{empresa.email}</p>
                <p>NIT {empresa.RUT}</p>
                <p>{empresa.address}</p>
                <p>Tel: {empresa.phone}</p>
              </CardContent>
              <CardFooter>
                <div>
                  <Button className="mt-2 bg-blue-800 hover:bg-blue-500 text-lg">
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
