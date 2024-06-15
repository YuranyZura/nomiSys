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
  return (
    <div className="w-full max-h-screen overflow-hidden">
      {empresa ? (
        <div className="flex flex-col space-y-4">
          <h1 className="bg-gradient-to-r text-4xl font-bold from-slate-700 to-slate-400 rounded-md mt-2 px-2 py-1 flex items-end justify-between">
            <p className="text-lg">
              <a className="text-4xl">{empresa.nombreEmpresa} </a>|{" "}
              {empresa.descripcionEmpresa}
            </p>
            <Link to={`/dashboard/register_supervisor/${empresa.id}`}>
              <button className="bg-sky-500 text-white px-2 py-1 text-lg rounded-md ml-2">
                Registrar supervisor
              </button>
            </Link>
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
              <CardContent className="grid grid-cols-3 text-white  gap-1 ">
                <div className="flex space-x-2">
                  <FaUser size={25} className="text-sky-500 text-4xl" />
                  <p>Antonio</p>
                </div>
                <div className="flex space-x-2">
                  <MdEmail size={25} className="text-sky-500" />
                  <p>olvadis2004@gmail.com</p>
                </div>

                <div className="flex space-x-2">
                  <FaLocationDot size={25} className="text-sky-500" />
                  <p>CL 99A-127 Barrio</p>
                </div>
                <div className="flex space-x-2">
                  <HiIdentification size={25} className="text-sky-500" />
                  <p>272732737</p>
                </div>

                <div className="flex space-x-2">
                  <FaPhoneAlt size={20} className="text-sky-500" />
                  <p>323232323</p>
                </div>
                <div className="flex space-x-2">
                  <FaCreditCard size={20} className="text-sky-500" />
                  <p>323232323</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className=" flex w-full gap-4">
            <div className="w-8/12">
              <Table className="w-4/12 m-0">
                <ul className="flex justify-between px-2 py-2 bg-slate-600 rounded-md w-[500px] mb-1">
                  <li className="font-medium">Invoice</li>
                  <li className="font-medium">Payment Status</li>
                  <li className="font-medium">Payment Method</li>
                  <li className="font-medium text-right">Total Amount</li>
                </ul>
                <ScrollArea className="h-72 w-[500px] p-0 m-0 rounded-md border flex-grow">
                  <TableBody className="w-full">
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">
                          {invoice.invoice}
                        </TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                          {invoice.totalAmount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </ScrollArea>
              </Table>
            </div>

            <div className="w-full">
              <Table className="w-full">
                <ul className="flex justify-between px-2 py-2 bg-slate-600 rounded-md w-full mb-1">
                  <li className="font-medium">Invoice</li>
                  <li className="font-medium">Payment Status</li>
                  <li className="font-medium">Payment Method</li>
                  <li className="font-medium text-right">Total Amount</li>
                </ul>
                <ScrollArea className="h-72 w-full p-0 m-0 rounded-md border flex-grow">
                  <TableBody className="w-full">
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">
                          {invoice.invoice}
                        </TableCell>
                        <TableCell>{invoice.paymentStatus}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">
                          {invoice.totalAmount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </ScrollArea>
              </Table>
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
