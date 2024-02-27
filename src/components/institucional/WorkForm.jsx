'use client'
import { useState } from 'react';
import { Form } from '@/components'
import { sendWorkHereMail } from '@/actions';

export const WorkForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [file, setFile] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChangeFile = e => {
        setSelectedFile(e.target.files[0]);
        setFile(e.target.value);
    }

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
            placeholder: "Departamento al que se postula",
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
            handleChange: handleChangeFile,
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

    const sendData = async () => {
        const fileReaderPromise = new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(selectedFile);
        });

        try {
            const fileB64 = await fileReaderPromise;
            if (fileB64.length > 1000000) {
                return { message: 'El tamaño del archivo excede el límite permitido (1MB)', code: 400 };
            }

            const data = {
                name,
                email,
                position,
                file,
                fileB64
            };

            const response = await sendWorkHereMail(data);

            if (response.code === 200) {
                setName('');
                setEmail('');
                setPosition('');
                setSelectedFile(null);
                setFile('');
            }

            return response;
        } catch (error) {
            return { message: 'Hubo un problema con el archivo subido. Asegurate de que su tamaño no exceda el límite permitido (1MB)', code: 400 };
        }
    }

    return (
        <Form
            fields={fields}
            classNames="form__workhere"
            sendData={sendData}
        />
    )
}
