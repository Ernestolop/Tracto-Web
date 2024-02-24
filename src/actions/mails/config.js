'use server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

//to debe ser un string. Si tenemos varios receptores deben ir separados por comas(,)
const getMailOptions = (to, subject) => {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to,
        subject
    };

    return mailOptions;
};


const getContactMailTemplate = (name, productType, email, phone, city, company) => {
    return `
    <p style="font-weight: bold;">Estimado equipo de posventa,</p>
    
    <p><span style="font-weight: bold;">${name}</span> quiere agendar un servicio para el tipo de producto <span style="font-weight: bold;">${productType}</span>.</p>
    
    <p>Sus datos de contacto son:</p>
    <ul>
        <li><strong>Correo electrónico:</strong> ${email}</li>
        <li><strong>Número de celular:</strong> ${phone}</li>
    </ul>
    
    <p>Otros datos:</p>
    <ul>
        <li><strong>Ciudad:</strong> ${city}</li>
        <li><strong>Empresa:</strong> ${company}</li>
    </ul>
    
    <p style="font-weight: bold;">Favor contactar con él para agendar el servicio.</p>
    `;
};

export default async function getMailConfig() {
    return { transporter, getMailOptions, getContactMailTemplate };
}
