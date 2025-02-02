import { z } from "zod";

export const formSchema = z.object({
    fullname: z.string().min(1, {
        message: 'Campo requerido'
    }),
    email: z.string().email({
        message: 'Correo invalido'
    }),
    description: z.string().min(1, {
        message: 'Campo requerido'
    })
});

export type FormSchema = typeof formSchema;