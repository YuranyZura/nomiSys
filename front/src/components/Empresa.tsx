import { useStore } from "@/store/user";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { MdEmail } from "react-icons/md";
import { FaBarcode, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { FaCreditCard } from "react-icons/fa6";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getEmpleadosByEmpresa } from "@/service/empleado";
import { useEffect, useState } from "react";
import { getSupervisorByEmpresa } from "@/service/supervisor";
import { getTareasByEmpresa } from "@/service/tarea";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Empresa = () => {
  const { id } = useParams();
  const empresas = useStore((state: any) => state.empresas);
  const empresa = empresas.find((empresa: any) => empresa.id === id);
  const user = useStore((state: any) => state.user);
  const [empleados, setEmpleados] = useState<any>([]);
  const [supervisor, setSupervisor] = useState<any>([]);
  const [tareas, setTareas] = useState<any>([]);

  const getEmpleados = async () => {
    const empleados = await getEmpleadosByEmpresa(id as string);
    setEmpleados(empleados);
  };

  const getSupervisor = async () => {
    const supervisor = await getSupervisorByEmpresa(id as string);
    setSupervisor(supervisor);
  };

  const getTareas = async () => {
    const tareas = await getTareasByEmpresa(id as string);
    setTareas(tareas);
  };

  useEffect(() => {
    getEmpleados();
    getSupervisor();
    getTareas();
  }, []);

  return (
    <div className="w-full max-h-screen overflow-hidden">
      {empresa ? (
        <div className="flex flex-col space-y-4">
          <h1 className="bg-gradient-to-r text-4xl font-bold from-slate-700 to-slate-400 rounded-md mt-2 px-2 py-1 flex items-end justify-between">
            <p className="text-lg">
              <a className="text-4xl">{empresa.nombreEmpresa} </a>|{" "}
              {empresa.descripcionEmpresa}
            </p>
            {user && user.role === "PROPIETARY" ? (
              <Link to={`/dashboard/register_supervisor/${empresa.id}`}>
                <button className="bg-sky-500 text-white px-2 py-1 text-lg rounded-md ml-2">
                  Registrar supervisor
                </button>
              </Link>
            ) : (
              <div className="h-full flex items-center">
                <Link
                  to={`/dashboard/register_empleado/${empresa.id}`}
                  className="bg-sky-500 text-white px-2 py-2 text-lg rounded-md ml-2 h-full"
                >
                  Registrar empleado
                </Link>
                <Link
                  to={`/dashboard/tarea/${empresa.id}`}
                  className="bg-sky-500 text-white px-2 py-2 text-lg rounded-md ml-2 h-full"
                >
                  Asignar Tarea
                </Link>
              </div>
            )}
          </h1>
          <div className=" flex w-full gap-4">
            <Card className="flex flex-col justify-between bg-transparent w-8/12">
              <CardHeader className="text-white">
                <CardTitle>Información</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 text-white gap-2 ">
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
            </Card>

            <Card className="flex flex-col  bg-transparent w-full">
              <CardHeader className="text-white ">
                <CardTitle>Supervisor</CardTitle>
              </CardHeader>
              {supervisor && (
                <CardContent className="grid grid-cols-3 text-white  gap-1 ">
                  <div className="flex space-x-2">
                    <FaUser size={25} className="text-sky-500 text-4xl" />
                    <p>{supervisor.username}</p>
                  </div>
                  <div className="flex space-x-2">
                    <MdEmail size={25} className="text-sky-500" />
                    <p>{supervisor.email}</p>
                  </div>

                  <div className="flex space-x-2">
                    <FaLocationDot size={25} className="text-sky-500" />
                    <p>{supervisor.direccion}</p>
                  </div>
                  <div className="flex space-x-2">
                    <HiIdentification size={25} className="text-sky-500" />
                    <p>{supervisor.doc}</p>
                  </div>

                  <div className="flex space-x-2">
                    <FaPhoneAlt size={20} className="text-sky-500" />
                    <p>{supervisor.phone}</p>
                  </div>
                  <div className="flex space-x-2">
                    <FaCreditCard size={20} className="text-sky-500" />
                    <p>{supervisor.noCuenta}</p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
          <div className=" flex w-full gap-4">
            <div className="w-8/12">
              <Table className="w-4/12 m-0">
                <ul className="flex justify-between px-2 py-2 bg-slate-600 rounded-md w-[500px] mb-1">
                  <li className="font-medium">Tarea</li>
                  <li className="font-medium">Empleado</li>
                  <li className="font-medium">Prioridad</li>
                  <li className="font-medium text-right">Precio</li>
                  <li className="font-medium text-right">Entrega</li>
                </ul>
                <ScrollArea className="h-72 w-[500px] p-0 m-0 rounded-md border flex-grow">
                  <TableBody className="w-full">
                    {tareas &&
                      tareas.map((tarea) => (
                        <TableRow key={tarea.id}>
                          <TableCell className="font-medium">
                            {tarea.tarea}
                          </TableCell>
                          <TableCell>{tarea.nombreEmpleado}</TableCell>
                          <TableCell className="text-right">
                            {tarea.prioridad}
                          </TableCell>
                          <TableCell>{tarea.precio}</TableCell>
                          <TableCell className="text-right">
                            {tarea.fechaEntrega}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </ScrollArea>
              </Table>
            </div>

            <div className="w-full">
              <table className="w-full">
                <thead className="flex justify-between px-2 py-2 bg-slate-600 rounded-md w-full mb-1">
                  <tr className="font-light flex justify-between  w-full">
                    <th>Email</th>
                    <th>DNI</th>
                    <th>Salario</th>
                    <th>Puesto</th>
                    <th>Inicio</th>
                    <th>Nacimiento</th>
                  </tr>
                </thead>
                <ScrollArea className="h-72 w-full p-0 m-0 rounded-md border ">
                  <tbody className="w-full">
                    {empleados &&
                      empleados.map((empleado) => (
                        <TableRow
                          key={empleado.dni}
                          className="w-full overflow-scroll"
                        >
                          <TableCell>{empleado.nombre}</TableCell>
                          <TableCell>{empleado.email}</TableCell>
                          <TableCell>{empleado.dni}</TableCell>
                          <TableCell>{empleado.direccion}</TableCell>
                          <TableCell>{empleado.telefono}</TableCell>
                          <TableCell>{empleado.salarioInicial}</TableCell>
                          <TableCell>{empleado.puestoTrabajo}</TableCell>
                          <TableCell>{empleado.fechaInicio}</TableCell>
                          <TableCell>{empleado.fechaNacimiento}</TableCell>
                        </TableRow>
                      ))}
                  </tbody>
                </ScrollArea>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <p>Empresa no encontrada</p>
      )}
    </div>
  );
};

export default Empresa;
