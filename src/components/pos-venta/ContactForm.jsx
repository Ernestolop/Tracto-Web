'use client'
import { useState } from 'react';
import { Form } from '@/components'
import { sendContactMail } from '@/actions';

export const ContactForm = () => {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [productType, setProductType] = useState('');

    const fields = [

        {
            inputId: "name",
            modifier: "name",
            label: "Nombre y Apellido*",
            inputName: "name",
            inputType: "text",
            placeholder: "Tu nombre y Apellido",
            value: name,
            handleChange: setName,
            required: true,
            validations: {
                maxLength: {
                    value: 255,
                    errorMessage: 'Su nombre debe tener como máximo 255 caracteres'
                }
            }
        },

        {
            inputId: "company",
            modifier: "company",
            label: "Empresa",
            inputName: "company",
            inputType: "text",
            placeholder: "Nombre de la empresa",
            value: company,
            handleChange: setCompany,
            validations: {
                maxLength: {
                    value: 255,
                    errorMessage: 'El nombre de la empresa debe tener como máximo 255 caracteres'
                }
            }
        },

        {
            inputId: "email",
            modifier: "email",
            label: "Correo electrónico*",
            inputName: "email",
            inputType: "email",
            placeholder: "Tu email",
            value: email,
            handleChange: setEmail,
            required: true,
            validations: {
                regex: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    errorMessage: 'El correo no es válido'
                },
                maxLength: {
                    value: 255,
                    errorMessage: 'Su correo debe tener como máximo 255 caracteres'
                }
            }
        },

        {
            inputId: "phone",
            modifier: "phone",
            label: "Celular*",
            inputName: "phone",
            inputType: "tel",
            placeholder: "Formato: 595 XXX XXX XXX",
            value: phone,
            handleChange: setPhone,
            required: true,
            validations: {
                regex: {
                    value: /^[0-9]*$/,
                    errorMessage: 'El formato de número de celular no es válido'
                },
                equalLength: {
                    value: 12,
                    errorMessage: 'El formato de número de celular no es válido'
                }
            }
        },

        {
            inputId: "city",
            modifier: "city",
            label: "Ciudad*",
            inputName: "city",
            inputType: "text",
            placeholde: "Tu ciudad",
            value: city,
            handleChange: setCity,
            required: true,
            validations: {
                maxLength: {
                    value: 255,
                    errorMessage: 'Su ciudad debe tener como máximo 255 caracteres'
                }
            }
        },

        {
            inputId: "productType",
            modifier: "options",
            label: "Seleccione el tipo de producto*",
            inputName: "productType",
            inputType: "radio",
            value: productType,
            handleChange: setProductType,
            required: true,
            options: [
                {
                    value: "Tractores",
                    label: "Tractores"
                },
                {
                    value: "Maquina vial",
                    label: "Máquina vial"
                },
                {
                    value: "Implementos",
                    label: "Implementos"
                }
            ]
        },
    ];

    const sendData = async () => {
        const data = {
            name,
            company,
            email,
            phone,
            city,
            productType
        }

        const response = await sendContactMail(data);

        if (response.code === 200) {
            setName('');
            setCompany('');
            setEmail('');
            setPhone('');
            setCity('');
            setProductType('');
        }

        return response;
    }

    return (
        <Form
            fields={fields}
            sendData={sendData}
            classNames="form__contact"
        />
    )
}
