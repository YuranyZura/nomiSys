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
  return (
    <div className="p-6 w-full  bg-red-600 ">
      <div className="p-7 bg-yellow-300 flex justify-end">
        <Button type="submit" className="bg-blue-800 hover:bg-blue-500 text-lg">
          Registrar empresa
        </Button>
      </div>
      <h1>Empresas</h1>
      <div className="flex space-x-2 bg-black w-1/2 ">
        <Card>
          <CardHeader>
            <CardTitle>Zoomac</CardTitle>
            <CardDescription>construccion</CardDescription>
          </CardHeader>
          <CardContent>
            <p>construccion@gmail.com</p>
            <p>NIT 1258</p>
            <p>Apartado CL 98 #12-23</p>
          </CardContent>
          <CardFooter>
            <p>tel 321987456</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Inversiones ahsarch sas zomac</CardTitle>
            <CardDescription>construccion</CardDescription>
          </CardHeader>
          <CardContent>
            <p>ahsley3110@gmail.com</p>
            <p>NIT 901299575-5</p>
            <p>chigorodo urb montecarlos manzana B4 #26</p>
          </CardContent>
          <CardFooter>
            <p>tel 3156987423</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>solo maiz</CardTitle>
            <CardDescription>venta envueltos de choclo</CardDescription>
          </CardHeader>
          <CardContent>
            <p>solo maiz@gmail.com</p>
            <p>NIT 02365</p>
            <p>Apartado calle #3 bloque 1osdjfojsfjsdifjiodsjf</p>
          </CardContent>
          <CardFooter>
            <p>tel 3225649807</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Empresas;
