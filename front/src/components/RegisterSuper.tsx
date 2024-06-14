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

const formSchema = z.object({
  username: z.string().min(5, {
    message: "El nombre de usuario debe tener al menos 5 caracteres",
  }),
  doc: z
    .string()
    .min(6, {
      message: "El documento debe contener al menos 8 caracteres",
    })
    .max(11, {
      message: "El documento debe contener maximo 11 caractares",
    }),
  direccion: z
    .string()
    .min(8, {
      message: "La direccion debe contener al menos 8 caracteres",
    })
    .optional(),
  telefono: z
    .string()
    .min(8, {
      message: "El telefono debe contener al menos 8 caracteres",
    })
    .optional(),
  email: z.string().email({
    message: "Correo invalido",
  }),
  password: z.string().min(8, {
    message: "La contraseña debe contener al menos 8 caracteres",
  }),
  passwordConfirmation: z.string().min(8, {
    message: "La contraseña debe contener al menos 8 caracteres",
  }),
  noCuenta: z.string().min(8, {
    message: "La cuenta debe contener al menos 8 caracteres",
  }),
});

export function RegisterSuper() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      doc: "",
      direccion: "",
      telefono: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      noCuenta: "",
    },
    mode: "onSubmit",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="w-full md:w-1/3 mx-auto md:my-[300px]">
      <CardHeader>
        <CardTitle>Formulario de registro Supervisor</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8  px-2"
          >
            <div className="flex flex-col justify-between md:flex-row  ">
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
            </div>
            <div className="flex flex-col justify-between md:flex-row ">
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
              <FormField
                control={form.control}
                name="telefono"
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
            </div>
            <div className="flex flex-col justify-between md:flex-row ">
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
                    <FormDescription>Este es tu contraseña.</FormDescription>
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
            </div>
            <Button
              type="submit"
              className="bg-blue-900 hover:bg-blue-600 md:bg-blue-900"
            >
              Registar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default RegisterSuper;
