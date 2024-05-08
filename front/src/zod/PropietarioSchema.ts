import { z } from "zod";

export const propietarioSchema = z
  .object({
    email: z
      .string({ required_error: "Username is require" })
      .email()
      .min(5, {
        message: "Username must be contain almost 5 character",
      })
      .max(100, { message: "Username must be contain less than 50 character" }),
    password: z
      .string({ required_error: "Password is require" })
      .min(5, { message: "Password must be contain almost 5 character" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?~\\-]).{5,30}$/,
        {
          message:
            "Password must be almost one uppercase, one number and one special character",
        }
      )
      .max(30, { message: "Password must be contain less than 50 character" }),
    confirmPassword: z
      .string({ required_error: "Retype password is require" })
      .min(5, { message: "Password must be contain almost 5 character" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?~\\-]).{5,30}$/,
        {
          message:
            "Password must be almost one uppercase, one number and one special character",
        }
      )
      .max(30, { message: "Password must be contain less than 50 character" }),
    username: z
      .string({ required_error: "First name is require" })
      .regex(/[a-zA-z]/, {
        message: "First name must be contain only letters",
      })
      .min(2, { message: "First name must be contain almost 2 letters" })
      .max(30, { message: "First name must be contain less than 30 letters" }),
    doc: z
      .string()
      .regex(/^\d{6,15}$/, { message: "DNI number must contain only numbers" })
      .min(6, { message: "DNI number must be contain almost 6 numbers" })
      .max(15, { message: "DNI number must be contain less than 15 numbers" }),
    phone: z
      .string({
        required_error: "Phone is require",
      })
      .regex(/^[0-9]{10}$/, { message: "Phone must be contain only numbers" })
      .length(10, { message: "Phone must be contain 10 numbers" })
      .optional(),
    address: z
      .string()
      .min(5, { message: "Address must be contain almost 5 character" })
      .max(100, { message: "Address must be contain less than 100 character" })
      .optional(),
    noCuenta: z
      .string()
      .min(5, { message: "Account number must be contain almost 5 character" })
      .max(100, {
        message: "Account number must be contain less than 100 character",
      })
      .optional(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
