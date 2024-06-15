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
import { v4 as uuid } from "uuid";
import { db } from "@/config/firebase";
import { setDoc, doc as docFirebase } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import Empresa from "./Empresa";

const formSchema = z.object({
  nombreCompleto: z.string().nonempty({
    message: "Por favor, introduce tu nombre completo",
  }),
  fechaNacimiento: z.string().nonempty({
    message: "Por favor, introduce tu fecha de nacimiento",
  }),
  dni: z.string().min(8, {
    message: "El documento debe contener al menos 8 caracteres",
  }),
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido",
  }),
  puestoTrabajo: z.string().nonempty({
    message: "Por favor, introduce el puesto de trabajo",
  }),
  telefonoMovil: z.string().min(8, {
    message: "El teléfono móvil debe contener al menos 8 caracteres",
  }),
  fechaInicio: z.string().nonempty({
    message: "Por favor, introduce la fecha de inicio",
  }),
  salarioInicial: z.string().nonempty({
    message: "Por favor, introduce el salario inicial",
  }),
});

export function RegisterEmployee() {
  const navigation = useNavigate();
  const { toast } = useToast();
  const { id } = useParams();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombreCompleto: "",
      fechaNacimiento: "",
      dni: "",
      email: "",
      puestoTrabajo: "",
      telefonoMovil: "",
      fechaInicio: "",
      salarioInicial: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const idToUser = uuid();

    try {
      const {
        email,
        fechaInicio,
        fechaNacimiento,
        dni,
        puestoTrabajo,
        telefonoMovil,
        salarioInicial,
        nombreCompleto,
      } = values;

      const docRef = docFirebase(db, "employees", idToUser);
      const userRegister = await setDoc(docRef, {
        email,
        fechaInicio,
        fechaNacimiento,
        dni,
        puestoTrabajo,
        telefonoMovil,
        salarioInicial,
        nombreCompleto,
        empresa: id,
      });

      navigation("/dashboard");
    } catch (e: FirebaseError & any) {
      if (e.code === "auth/email-already-in-use") {
        toast({
          variant: "destructive",
          title: "Usuario ya se encuentra registrado.",
          action: (
            <ToastAction altText="Probar de nuevo">Probar de nuevo</ToastAction>
          ),
        });
      }
      if (e.code === "auth/invalid-email") {
        toast({
          variant: "destructive",
          title: "Correo invalido.",
          action: (
            <ToastAction altText="Probar de nuevo">Probar de nuevo</ToastAction>
          ),
        });
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Card className="max-w-screen-md w-1/2">
        <CardHeader>
          <CardTitle>Formulario de Registro de Empleados</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8  px-2"
            >
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nombreCompleto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan Perez" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dni"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Número de identificación (DNI/Pasaporte)
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="12345678" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="example@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="puestoTrabajo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Puesto de trabajo</FormLabel>
                      <FormControl>
                        <Input placeholder="Gerente de ventas" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="salarioInicial"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Salario inicial</FormLabel>
                      <FormControl>
                        <Input placeholder="$1000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telefonoMovil"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono móvil</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="321564987" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fechaInicio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha de inicio</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fechaNacimiento"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fecha de nacimiento</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full flex justify-center">
                <Button
                  type="submit"
                  className="w-1/3 mx-auto mt-4 bg-cyan-700 hover:bg-cyan-600"
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

export default RegisterEmployee;
