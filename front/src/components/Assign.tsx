import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmpleadosByEmpresa } from "@/service/empleado";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { v4 as uuid } from "uuid";
import { auth, db } from "@/config/firebase";
import { setDoc, doc as docFirebase } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  nombreEmpleado: z.string().nonempty({
    message: "Por favor, introduce el nombre del empleado",
  }),
  tarea: z.string().nonempty({
    message: "Por favor, introduce la tarea a asignar",
  }),
  fechaEntrega: z.string().nonempty({
    message: "Por favor, introduce la fecha de entrega",
  }),
  prioridad: z.string().nonempty({
    message: "Por favor, introduce la prioridad",
  }),
  precio: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => val > 0, { message: "El precio debe ser mayor a 0" }),
});

export function Assign() {
  const { idEmpresa } = useParams<{ idEmpresa: string }>();
  const [empleados, setEmpleados] = useState<any>([]);
  const userAuth = auth.currentUser;
  const { toast } = useToast();
  const navigation = useNavigate();

  const getEmpleados = async () => {
    const empleados = await getEmpleadosByEmpresa(idEmpresa as string);
    setEmpleados(empleados);
  };

  useEffect(() => {
    getEmpleados();
  }, []);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombreEmpleado: "",
      tarea: "",
      fechaEntrega: "",
      prioridad: "",
      precio: 0.0,
    },
    mode: "onSubmit",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { nombreEmpleado, tarea, fechaEntrega, prioridad, precio } = values;

    const id = uuid();
    const docRef = docFirebase(db, "tareas", id);
    const employee = empleados.find(
      (empleado: any) => empleado.id === nombreEmpleado
    );
    try {
      const tareaRegister = await setDoc(docRef, {
        idEmpleado: nombreEmpleado,
        tarea,
        fechaEntrega,
        prioridad,
        precio,
        nombreEmpleado: employee.nombreCompleto,
        idEmpresa,
        idSupervisor: userAuth?.providerId,
        id,
        fechaAsignacion: new Date().toISOString(),
      });
      navigation(`/dashboard/empresas/${idEmpresa}`);
    } catch (e: FirebaseError & any) {
      toast({
        variant: "destructive",
        title: "Error al asignar la tarea",
      });
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <Card className="max-w-screen-md">
        <CardHeader>
          <CardTitle>Formulario de Asignación de Tareas</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="flex flex-col gap-4 "
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex gap-4">
                <div className="flex flex-col space-y-2">
                  <FormField
                    control={form.control}
                    name="nombreEmpleado"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormControl>
                          <Select
                            {...field}
                            onValueChange={(value) =>
                              form.setValue("nombreEmpleado", value)
                            }
                          >
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Empleado" />
                            </SelectTrigger>
                            <SelectContent>
                              {empleados &&
                                empleados.map((empleado: any) => (
                                  <SelectItem
                                    value={empleado.id}
                                    key={empleado.id}
                                  >
                                    {empleado.nombreCompleto}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tarea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tarea</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descripción de la tarea"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col space-y-2 w-44">
                  <FormField
                    control={form.control}
                    name="prioridad"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormControl>
                          <Select
                            {...field}
                            onValueChange={(value) =>
                              form.setValue("prioridad", value)
                            }
                          >
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Prioridad" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="baja">Baja</SelectItem>
                              <SelectItem value="media">Media</SelectItem>
                              <SelectItem value="alta">Alta</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="precio"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            placeholder="precio"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fechaEntrega"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fecha de Entrega</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-4 w-full mx-auto ">
                <Button type="submit">Asignar</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Assign;
