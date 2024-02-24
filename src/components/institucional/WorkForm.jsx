'use client'
import { useState } from 'react';
import { Form } from '@/components'
import { sendWorkHereMail } from '@/actions';

export const WorkForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [file, setFile] = useState('');

    const fields = [

        {
            inputId: "name",
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
            inputId: "email",
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
            inputId: "position",
            label: "Departamento al que se postula",
            inputName: "position",
            inputType: "text",
            placeholder: "Nombre de la empresa",
            value: position,
            handleChange: setPosition,
            required: false,
            validations: {
                maxLength: {
                    value: 255,
                    errorMessage: 'El departamento debe tener como máximo 255 caracteres'
                }
            }
        },

        {
            inputId: "file",
            label: "Adjuntar CV*",
            inputName: "file",
            inputType: "file",
            placeholder: "Carga tu CV",
            value: file,
            handleChange: setFile,
            required: true,
            validations: {
                regex: {
                    value: /\.(pdf|doc|docx)$/i,
                    errorMessage: 'El archivo debe ser pdf, doc o docx'
                }
            },
            accept: '.pdf,.doc,.docx'
        }

    ]

    const  sendData = async () => {
        const data = {
            name,
            email,
            position,
            file
        }

        const response = await sendWorkHereMail(data);

        if (response.code === 200) {
            setName('');
            setEmail('');
            setPosition('');
            setFile('');
        }

        return response;
    }

    return (
        <Form
            fields={fields}
            classNames="form__workhere"
            sendData={sendData}
        />
    )
}
