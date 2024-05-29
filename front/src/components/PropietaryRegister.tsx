import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardTitle, CardHeader } from "./ui/card";
import { z } from "zod";
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
import { propietarioSchema } from "@/zod/PropietarioSchema";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { FirebaseError } from "firebase/app";
import { ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";
import { setDoc, doc as docFirebase } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useNavigate } from "react-router-dom";

export function SignupPropietary() {
  const { toast } = useToast();

  const navigation = useNavigate();

  const form = useForm<z.infer<typeof propietarioSchema>>({
    resolver: zodResolver(propietarioSchema),
    defaultValues: {
      username: "",
      doc: "",
      address: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      noCuenta: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (values: z.infer<typeof propietarioSchema>) => {
    try {
        const { email, password, phone, noCuenta, doc, username } = values;
        const createdUser = await createUserWithEmailAndPassword(auth, email, password);
        const docRef = docFirebase(db, "users", createdUser.user.uid);
       await setDoc(docRef, {
         email,
         phone,
         noCuenta,
         doc,
         username,
       });
     

      navigation("/login");

      // await signOut(auth);
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
  };

  return (
    <Card className="w-full md:w-[32rem] absolute right-12 top-10 ">
      <CardHeader>
        <CardTitle className="font-bold text-3xl">
          Formulario de registro
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8  px-2"
          >
            <div className="flex flex-col justify-between md:flex-row ">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full md:w-5/12">
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="maria" {...field} />
                    </FormControl>
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
                        placeholder="maria@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col justify-between md:flex-row ">
              <FormField
                control={form.control}
                name="doc"
                render={({ field }) => (
                  <FormItem className="w-full md:w-5/12">
                    <FormLabel>Documento</FormLabel>
                    <FormControl>
                      <Input placeholder="1652213323" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full md:w-5/12">
                    <FormLabel>Telefono</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="3434333231" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col justify-between md:flex-row ">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="w-full md:w-5/12">
                    <FormLabel>Direccion</FormLabel>
                    <FormControl>
                      <Input placeholder="CL 99B # 33-22" {...field} />
                    </FormControl>
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col justify-between md:flex-row ">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full md:w-5/12">
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="************************"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="w-full md:w-5/12">
                    <FormLabel>Confirmacion contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="************************"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-green-800 hover:bg-green-600 text-lg"
              >
                Registrarse
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default SignupPropietary;
