import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

const formSchema = z.object({
  nombreEmpresa: z.string().min(5, {
    message: "El nombre de la empresa debe tener al menos 5 caracteres",
  }),
  descripcionEmpresa: z.string().min(10, {
    message: "La descripción de la empresa debe tener al menos 10 caracteres",
  }),
  rut: z.string().min(9, {
    message: "El RUT debe tener al menos 9 caracteres",
  }),
  correo: z.string().email({
    message: "Correo inválido",
  }),
  direccion: z.string().min(8, {
    message: "La dirección debe tener al menos 8 caracteres",
  }),
  telefono: z.string().min(8, {
    message: "El teléfono debe tener al menos 8 caracteres",
  }),
});

export function RegistroEmpresa({ addEmpresa }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombreEmpresa: "",
      descripcionEmpresa: "",
      rut: "",
      correo: "",
      direccion: "",
      telefono: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(values) {
    addEmpresa({
      name: values.nombreEmpresa,
      description: values.descripcionEmpresa,
      email: values.correo,
      RUT: values.rut,
      address: values.direccion,
      phone: values.telefono,
    });
  }

  return (
    <div className="w-full bg-blue-950">
      <Card className="w-1/3 mx-auto h-auto bg-white md:mt-40">
        <CardHeader>
          <CardTitle>Formulario de Registro de Empresa</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 px-2"
            >
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="nombreEmpresa"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Nombre de la Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre de la Empresa" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="descripcionEmpresa"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Descripción de la Empresa</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Descripción de la Empresa"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="rut"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>RUT</FormLabel>
                      <FormControl>
                        <Input placeholder="RUT" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="correo"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Correo Electrónico</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Correo Electrónico"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="direccion"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <Input placeholder="Dirección" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="Teléfono" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-600 md:bg-blue-900"
                >
                  Registrar
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default RegistroEmpresa;
