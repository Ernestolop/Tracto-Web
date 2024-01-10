'use client'
import { useState } from 'react';
import { Alert, FormField } from '@/components'

export const WorkForm = () => {

    /*const [formData, setFormData] = useState({
        name: '',
        email: '',
        position: '',
        file: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = e => { e.preventDefault(); }*/

    const [fieldToFocus, setFieldToFocus] = useState(null);


    const [alert, setAlert] = useState({
        type: '',
        message: '',
        timeoutId: null,
        id: 1
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        position: '',
        file: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleAlert = (message, type = 'success', time = 3000) => {
        const id = alert.id + 1;
        setAlert({ type, message, id });
        clearTimeout(alert.timeoutId);
        const timeoutId = setTimeout(() => {
            setAlert({ type: '', message: '', timeoutId: null, id });
        }, time);
        setAlert({ type, message, timeoutId, id });
    }

    const handleSubmit = e => {

        e.preventDefault();

        //Obtener campos vacios
        const emptyFields = Object.keys(formData).filter(key => formData[key] === '');
        //Verificar si hay campos vacios
        if (emptyFields.length > 0) {
            const firstEmptyField = emptyFields[0];
            setFieldToFocus(firstEmptyField);
            handleAlert('Por favor complete todos los campos obligatorios.', 'error');
            return;
        }

        //validar email
        const email = formData.email;
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regexEmail.test(email)) {
            setFieldToFocus('email');
            handleAlert('Por favor ingrese un email válido.', 'error');
            return;
        }

        //validar que el file sea un pdf o un doc
        const file = formData.file;
        const regexFile = /^.*\.(pdf|doc|docx)$/i;
        if (!regexFile.test(file)) {
            setFieldToFocus('file');
            handleAlert('Tu cv lo debes cargar en formato pdf o doc.', 'error');
            return;
        }

        //validar que el nombre y el departamento no superen los 255 caracteres
        const name = formData.name;
        const position = formData.position;
        if (name.length > 255) {
            setFieldToFocus('name');
            handleAlert('El nombre no puede superar los 255 caracteres.', 'error');
            return;
        }
        if (position.length > 255) {
            setFieldToFocus('position');
            handleAlert('El departamento no puede superar los 255 caracteres.', 'error');
            return;
        }
    }



    return (
        <>
            {alert.message && <Alert key={alert.id} type={alert.type} message={alert.message} />}
            <form onSubmit={handleSubmit} className="form">
                <div className='form--workhere'>
                    <FormField
                        inputId="name"
                        label="Nombre y Apellido completo*"
                        inputName="name"
                        inputType="text"
                        placeholder="Tu nombre y Apellido"
                        value={formData.name}
                        onChange={handleChange}
                        toFocus={(fieldToFocus === 'name')}

                    />
                    <FormField
                        inputId="email"
                        label="Correo electrónico*"
                        inputName="email"
                        inputType="email"
                        placeholder="Tu email"
                        value={formData.email}
                        onChange={handleChange}
                        toFocus={(fieldToFocus === 'email')}
                    />
                    <FormField
                        inputId="position"
                        label="Departamento al que se postula"
                        inputName="position"
                        inputType="text"
                        placeholder="Nombre de la empresa"
                        value={formData.position}
                        onChange={handleChange}
                        toFocus={(fieldToFocus === 'position')}
                    />
                    <FormField
                        inputId="file"
                        modifier="file"
                        label="Adjuntar CV*"
                        inputName="file"
                        inputType="file"
                        placeholder="Carga tu CV"
                        value={formData.file}
                        onChange={handleChange}
                        toFocus={(fieldToFocus === 'file')}
                    />
                </div>
                <input type="submit" value="Enviar" className="form__field--submit form__submit" />
            </form>
        </>

    )
}
