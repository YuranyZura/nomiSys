import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  nombreEmpleado: z.string().nonempty({
    message: "Por favor, introduce el nombre del empleado",
  }),
  tarea: z.string().nonempty({
    message: "Por favor, introduce la tarea a asignar",
  }),
  fechaAsignacion: z.string().nonempty({
    message: "Por favor, introduce la fecha de asignación",
  }),
  fechaEntrega: z.string().nonempty({
    message: "Por favor, introduce la fecha de entrega",
  }),
  prioridad: z.string().nonempty({
    message: "Por favor, introduce la prioridad de la tarea",
  }),
});

export function Assign() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombreEmpleado: "",
      tarea: "",
      fechaAsignacion: "",
      fechaEntrega: "",
      prioridad: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex justify-center items-center h-screen w-1/2 bg-green-500">
      <Card className="max-w-screen-md">
        <CardHeader>
          <CardTitle>Formulario de Asignación de Tareas</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <FormField
                  control={form.control}
                  name="nombreEmpleado"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre del Empleado</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan Perez" {...field} />
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
                        <Textarea placeholder="Descripción de la tarea" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="fechaAsignacion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha de Asignación</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
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
                <FormField
                  control={form.control}
                  name="prioridad"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prioridad</FormLabel>
                      <FormControl>
                        <Input placeholder="Alta, Media, Baja" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-4 bg-cyan-700 hover:bg-cyan-600">
              Asignar Tarea
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Assign;
