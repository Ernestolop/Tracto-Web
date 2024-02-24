'use server';
import getMailConfig from './config';

class CustomError extends Error {
    constructor(message, code) {
        super(message)
        this.code = code;
    }
}

export const sendContactMail = async (data) => {
    try {
        //Datos recibidos del cliente
        const { name, company, email, phone, city, productType } = data;

        //Validaciones de los datos
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]*$/;
        const phoneNumber = phone.replace(/\s/g, '');

        if (!name) {
            throw new CustomError('El nombre es requerido', 400);
        } else if (!email) {
            throw new CustomError('El email es requerido', 400);
        } else if (!phone) {
            throw new CustomError('El teléfono es requerido', 400);
        } else if (!city) {
            throw new CustomError('La ciudad es requerida', 400);
        } else if (!productType) {
            throw new CustomError('El tipo de producto es requerido', 400);
        } else if (name.length > 255) {
            throw new CustomError('El nombre no puede superar los 255 caracteres', 400);
        } else if (company.length > 255) {
            throw new CustomError('La empresa no puede superar los 255 caracteres', 400);
        } else if (email.length > 255) {
            throw new CustomError('El email no puede superar los 255 caracteres', 400);
        } else if (phoneNumber.length != 12) {
            throw new CustomError('El número de celular no es valido', 400);
        } else if (city.length > 255) {
            throw new CustomError('La ciudad no puede superar los 255 caracteres', 400);
        } else if (productType.length > 255) {
            throw new CustomError('El tipo de producto no puede superar los 255 caracteres', 400);
        } else if (!emailRegex.test(email)) {
            throw new CustomError('El email no es valido', 400);
        } else if (!phoneRegex.test(phone)) {
            throw new CustomError('El  número de celular no es valido', 400);
        }

        //Datos para el envío
        const { transporter, getContactMailTemplate, getMailOptions } = await getMailConfig();
        const mailMessage = getContactMailTemplate(name, productType, email, phone, city, company);
        const mailOptions = {
            ...getMailOptions(
                'ernestodaniellopez504@gmail.com',
                `Solicitud de servicio - ${name} - ${productType}`),
            html: mailMessage
        }

        //Envío
        await transporter.sendMail(mailOptions);
        return { message: 'Datos enviados correctamente, En breve nos pondremos en contacto con usted!', code: 200 };
    } catch (error) {
        console.log(error)
        if (error instanceof CustomError) {
            return { message: error.message, code: error.code };
        } else {
            return { message: 'Error interno al intentar enviar los datos, favor intente de nuevo más tarde', code: 500 };
        }
    }
}

