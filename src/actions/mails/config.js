'use server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const contactMailTo = process.env.CONTACT_MAIL_TO;
const workHereMailTo = process.env.WORK_HERE_MAIL_TO;

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
    <p style="font-weight: bold;">Estimado equipo de Posventa,</p>
    
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

const getWorkHereMailTemplate = (name, email, position) => {
    return `
    <p style="font-weight: bold;">Estimado equipo de Recursos Humanos,</p>
    
    <p><span style="font-weight: bold;">${name}</span> Ha enviado su currículum para el departamento de <span style="font-weight: bold;">${position}</span>.</p>
    
    <p>Sus datos de contacto son:</p>
    <ul>
        <li><strong>Correo electrónico:</strong> ${email}</li>
    </ul>
    
    <p style="font-weight: bold;">Adjunto a este correo encontrarás el archivo del currículum cargado.</p>
    `;
};

export default async function getMailConfig() {
    return { transporter, getMailOptions, getContactMailTemplate, getWorkHereMailTemplate, contactMailTo, workHereMailTo };
}

