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
import { db, secondaryAuth } from "@/config/firebase";
import { setDoc, doc as docFirebase } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { supervisorSchema } from "@/zod/SupervisorSchema";

export function RegisterSupervisor() {
  const { id } = useParams();
  const form = useForm<z.infer<typeof supervisorSchema>>({
    resolver: zodResolver(supervisorSchema),
    defaultValues: {
      username: "",
      doc: "",
      direccion: "",
      phone: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      noCuenta: "",
    },
    mode: "onSubmit",
  });
  const navigation = useNavigate();
  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof supervisorSchema>) {
    try {
      const { username, doc, direccion, phone, email, password, noCuenta } =
        values;
      const createdUser = await createUserWithEmailAndPassword(
        secondaryAuth,
        email,
        password
      );
      const docRef = docFirebase(db, "users", createdUser.user.uid);
      await setDoc(docRef, {
        username,
        doc,
        direccion,
        phone,
        email,
        noCuenta,
        role: "SUPERVISOR",
        empresa: id,
      });

      navigation("/dashboard");

      await signOut(secondaryAuth);
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
    <div className=" w-full md:w-full h-screen flex justify-center items-center">
      <Card className="w-full mx-auto md:w-7/12">
        <CardHeader>
          <CardTitle>Formulario de registro Supervisor</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8  px-2"
            >
              <div className="flex flex-col justify-between md:flex-row space-x-2  ">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-5/12">
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan" {...field} />
                      </FormControl>
                      <FormDescription>
                        Este es el nombre de usuario
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-5/12">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="juan@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Este es el correo electronico
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="doc"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-5/12">
                      <FormLabel>Documento</FormLabel>
                      <FormControl>
                        <Input placeholder="1001036321" {...field} />
                      </FormControl>
                      <FormDescription>
                        Este es el documento de identidad
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex flex-col justify-between md:flex-row space-x-2">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-5/12">
                      <FormLabel>Telefono/celular</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="321564987" {...field} />
                      </FormControl>
                      <FormDescription>
                        Este es el telefono o celular
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="direccion"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-5/12">
                      <FormLabel>Direccion</FormLabel>
                      <FormControl>
                        <Input placeholder="CL 99B # 33-22" {...field} />
                      </FormControl>
                      <FormDescription>Este es tu direccion.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="noCuenta"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-5/12">
                      <FormLabel>Numero de Cuenta Bancaria</FormLabel>
                      <FormControl>
                        <Input placeholder="232323232" {...field} />
                      </FormControl>
                      <FormDescription>
                        Este es tu cuenta bancaria bancolombia.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col justify-between md:flex-row items-center">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-5/12">
                      <FormLabel>Confirmación contraseña</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="************************"
                          className="min-w-52"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Esta es la contraseña.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="passwordConfirmation"
                  render={({ field }) => (
                    <FormItem className="w-full md:w-5/12">
                      <FormLabel>Confirmación contraseña</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="************************"
                          className="min-w-52"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Esta es la confirmación de contraseña.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-blue-800 text-white hover:bg-blue-500"
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

export default RegisterSupervisor;
