'use client'
import { useState } from 'react';
import { FormField, Alert } from '@/components'


export const Form = ({ submitForm, fields }) => {

    const [fieldToFocus, setFieldToFocus] = useState(null);


    const [alert, setAlert] = useState({
        type: '',
        message: '',
        timeoutId: null,
        id: 1
    });

    const handleAlert = (message, type = 'success', time = 3000) => {
        const id = alert.id + 1;
        setAlert({ type, message, id });
        clearTimeout(alert.timeoutId);
        const timeoutId = setTimeout(() => {
            setAlert({ type: '', message: '', timeoutId: null, id });
        }, time);
        setAlert({ type, message, timeoutId, id });
    }

    //ejemplo de field
    /*const field = {
        modifier: "name",
        inputId: "name",
        label: "Nombre y Apellido*",
        inputName: "name",
        inputType: "text",
        placeholder: "Tu nombre y Apellido",
        validations: {
            minLength: 3,
            maxLength: 100,
            regex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
            isNumber: false,
        },
        required: true
    }*/

    const middlewareForm = e => {
        e.preventDefault();

        //Hacer las validaciones recorriendo el array de fields
        //Obtener campos vacios
        


        submitForm();
    }

    return (
        <>
            {alert.message && <Alert key={alert.id} type={alert.type} message={alert.message} />}
            <form onSubmit={middlewareForm}>

            </form>
        </>
    )
}
