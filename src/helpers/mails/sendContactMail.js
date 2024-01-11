class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}

export const sendContactMail = async (data) => {
    try {

        const { name, company, email, phone, city, productType } = data;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]*$/;
        const phoneNumber = phone.replace(/\s/g, '');

        //validar los datos
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

