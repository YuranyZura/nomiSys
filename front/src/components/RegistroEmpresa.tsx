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
import { saveEmpresa } from "@/service/empresa";
import { useToast } from "./ui/use-toast";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "@/service/user";
import { auth } from "@/config/firebase";
import { useEffect, useState } from "react";
import { useStore } from "@/store/user";

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

export function RegistroEmpresa() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const user = useStore((state: any) => state.user);

  const form = useForm<z.infer<typeof formSchema>>({
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    saveEmpresa({ ...values, userDoc: user.doc });
    toast({
      variant: "default",
      title: "Empresa registrada exitosamente",
    });
    navigate("/dashboard/empresas");
  }

  return (
    <div className="w-full flex justify-center items-start">
      <Card className="w-[420px] mx-auto h-auto bg-white md:mt-20">
        <CardHeader>
          <CardTitle>Formulario de Registro de Empresa</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-10 px-2"
            >
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="nombreEmpresa"
                  render={({ field }) => (
                    <FormItem className="w-1/2 flex flex-col justify-around">
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
                    <FormItem className="w-1/2 flex flex-col justify-around">
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
                    <FormItem className="w-full flex flex-col justify-around">
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
                    <FormItem className="w-full flex flex-col justify-around">
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
                    <FormItem className="w-full flex flex-col justify-around">
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
                    <FormItem className="w-full flex flex-col justify-around">
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="Teléfono" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-center">
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
