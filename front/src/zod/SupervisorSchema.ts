import { z } from "zod";

export const supervisorSchema = z
  .object({
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
    phone: z
      .string()
      .min(8, {
        message: "El telefono debe contener al menos 8 caracteres",
      })
      .optional(),
    email: z.string().email({
      message: "Correo invalido",
    }),
    password: z.string().min(6, {
      message: "La contraseña debe contener al menos 6 caracteres",
    }),
    passwordConfirmation: z.string().min(6, {
      message: "La contraseña debe contener al menos 6 caracteres",
    }),
    noCuenta: z.string().min(8, {
      message: "La cuenta debe contener al menos 8 caracteres",
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Las contraseñas no coinciden",
  });
