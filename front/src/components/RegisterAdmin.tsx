import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/form";
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
    message: "Username must be at least 5 characters.",
  }),
  doc: z
    .string()
    .min(6, {
      message: "Password must be at least 8 characters.",
    })
    .max(11, {
      message: "Password must be at least 8 characters.",
    }),
  direccion: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .optional(),
  telefono: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .optional(),
  email: z.string().email({
    message: "Invalid email.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  passwordConfirmation: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  noCuenta: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export function RegisterAdmin() {
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
        <CardTitle>Formulario de registro</CardTitle>
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
                      <Input placeholder="maria" {...field} />
                    </FormControl>
                    <FormDescription>
                      Este es tu nombre de usuario.
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
                        placeholder="maria@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Este es tu correo electronico.
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
                      <Input placeholder="1652213323" {...field} />
                    </FormControl>
                    <FormDescription>
                      Este es tu documento de identidad.
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
                    <FormLabel>Telefono</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="3434333231" {...field} />
                    </FormControl>
                    <FormDescription>Este es tu telefono.</FormDescription>
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
                    <FormLabel>Confirmacion contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="************************"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Este la confirmacion de contraseña.
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
            <Button
              type="submit"
              className="bg-red-800 hover:bg-blue-600 md:bg-green-400"
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

export default RegisterAdmin;
