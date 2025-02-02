import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';
import { EMAIL_USER, EMAIL_PASS } from '$env/static/private';



//Carga inicial del formulario en la pagina
export const load: PageServerLoad = async () => {
    const form = await superValidate(zod(formSchema));
    return { form };
}

export const actions: Actions = {
    default: async (event) => {
        // Procesa el formulario
        const form = await superValidate(event, zod(formSchema));

        if (!form.valid) {
            return { form };
        }

        // Extraer los datos validos
        const { fullname, email, description } = form.data;

        const nodemailer = (await import('nodemailer')).default;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            }
        });

        console.log(EMAIL_USER);

        // Configura los detalles del correo
        const mailOptions = {
            from: `"Formulario de Contacto" <${EMAIL_USER}>`,
            to: 'jostick516@gmail.com', // Tu bandeja de correo
            subject: `Nuevo mensaje de ${fullname}`,
            text: `Has recibido un nuevo mensaje de ${fullname} (${email}).\n\nMensaje:\n${description}`,
            html: `<p>Has recibido un nuevo mensaje de <strong>${fullname}</strong> (${email}).</p><p>Mensaje:</p><p>${description}</p>`
        };

        try {
            await transporter.sendMail(mailOptions)
            return { form, success: true }

        } catch (error: any) {
            console.error('Error al enviar correo')
            return { form, error: 'Error al enviar el correo' }
        }
    }
}