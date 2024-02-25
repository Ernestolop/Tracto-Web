'use server';
import getMailConfig from './config';

class CustomError extends Error {
    constructor(message, code) {
        super(message)
        this.code = code;
    }
}


export const sendWorkHereMail = async (data) => {
    try {
        //Datos recibidos del cliente
        const { name, email, position, file, fileB64 } = data;

        //Validaciones de los datos
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const fileRegex = /.(pdf|doc|docx)$/i;
        const fileSizeLimit = 1000000; // 1MB
        if (!name) {
            throw new CustomError('El nombre es requerido', 400);
        } else if (!email) {
            throw new CustomError('El email es requerido', 400);
        } else if (!position) {
            throw new CustomError('El departamento al que se postula es requerido', 400);
        } else if (!file) {
            throw new CustomError('El cv es requerido', 400);
        } else if (!fileB64) {
            throw new CustomError('El cv es requerido', 400);
        } else if (name.length > 255) {
            throw new CustomError('El nombre no puede superar los 255 caracteres', 400);
        } else if (email.length > 255) {
            throw new CustomError('El email no puede superar los 255 caracteres', 400);
        } else if (position.length > 255) {
            throw new CustomError('El departamento no puede superar los 255 caracteres', 400);
        } else if (!fileRegex.test(file)) {
            throw new CustomError('El cv debe ser un archivo de tipo pdf, doc o docx', 400);
        } else if (!emailRegex.test(email)) {
            throw new CustomError('El email no es valido', 400);
        }

        //Validar tamaño del CV
        if (fileB64.length > fileSizeLimit) {
            throw new CustomError('El tamaño del archivo excede el límite permitido (1MB)', 400);
        }

        //Datos para el envío
        const fileBuffer = Buffer.from(fileB64.split(';base64,').pop(), 'base64');
        const fileName = file.split('\\').pop();
        const { transporter, getWorkHereMailTemplate, getMailOptions } = await getMailConfig();
        const mailMessage = getWorkHereMailTemplate(name, email, position);
        const mailOptions = {
            ...getMailOptions(
                'ernestodaniellopez504@gmail.com',
                `CV - ${name} - ${position}`),
            html: mailMessage,
            attachments: [
                {
                    filename: fileName,
                    content: fileBuffer
                }
            ]
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

