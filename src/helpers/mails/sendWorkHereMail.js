class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

export const sendWorkHereMail = async (data) => {
    try {
        const { name, email, position, file } = data;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const fileRegex = /.(pdf|doc|docx)$/i;

        //validar los datos
        if (!name) {
            throw new CustomError('El nombre es requerido', 400);
        } else if (!email) {
            throw new CustomError('El email es requerido', 400);
        } else if (!position) {
            throw new CustomError('El departamento al que se postula es requerido', 400);
        } else if (!file) {
            throw new CustomError('El cv es requerido', 400);
        } else if (name.length > 255) {
            throw new CustomError('El nombre no puede superar los 255 caracteres', 400);
        } else if (email.length > 255) {
            throw new CustomError('El email no puede superar los 255 caracteres', 400);
        } else if (position.length > 255) {
            throw new CustomError('El departamento no puede superar los 255 caracteres', 400);
        } else if (file.size > 1000000) {
            throw new CustomError('El cv no puede pesar mas de 1MB', 400);
        } else if (!fileRegex.test(file)) {
            throw new CustomError('El cv debe ser un archivo de tipo pdf, doc o docx', 400);
        } else if (!emailRegex.test(email)) {
            throw new CustomError('El email no es valido', 400);
        }

        //enviar el correo
        return { message: 'Correo enviado correctamente', code: 200 };

    } catch (error) {
        console.log(error);
        if (error.code) {
            return error;
        }
        return { message: 'Error interno al intentar enviar el correo', code: 500 };
    }

}

