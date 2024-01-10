'use client'
import { useState } from 'react';
import { FormField, Alert } from '@/components'


export const Form = ({ sendData, fields, classNames }) => {


    const [errorField, setErrorField] = useState(null);

    const [alert, setAlert] = useState({
        type: '',
        message: '',
        timeoutId: null,
        id: 1
    });

    const handleAlert = (message, type = 'success', time = 3000) => {
        const id = alert.id + 1;
        clearTimeout(alert.timeoutId);
        const timeoutId = setTimeout(() => {
            setAlert({ type: '', message: '', timeoutId: null, id });
        }, time);
        setAlert({ type, message, timeoutId, id });
    }

    const middlewareForm = e => {
        e.preventDefault();
        setErrorField(null);

        try {
            fields.forEach(field => {

                //Verificar campos obligatorios
                if (field.required) {
                    if (field.value === '') {
                        setErrorField(field.inputId);
                        throw new Error("Debes completar todos los campos obligatorios.")
                    }
                }

                //Verificar campos numericos
                if (field.inputType === 'number' && field.value !== '') {
                    if (isNaN(field.value)) {
                        setErrorField(field.inputId);
                        throw new Error(`El campo ${field.label} debe ser un número.`);
                    }
                }

                //Verificar validaciones personalizadas
                if (field.validations) {
                    if (field.value !== '') {
                        if (field.validations.minLength) {
                            if (field.value.length < field.validations.minLength.value) {
                                setErrorField(field.inputId);
                                throw new Error(field.validations.minLength.errorMessage);                                
                            }
                        }
                        if (field.validations.maxLength) {
                            if (field.value.length > field.validations.maxLength.value) {
                                setErrorField(field.inputId);
                                throw new Error(field.validations.maxLength.errorMessage);                                
                            }
                        }
                        if (field.validations.regex) {
                            if (!field.validations.regex.value.test(field.value)) {
                                setErrorField(field.inputId);
                                throw new Error(field.validations.regex.errorMessage);                                
                            }
                        }
                    }
                }

            });

            //Enviar al servidor
            sendData();
        } catch (error) {
            handleAlert(error.message, 'error');
        }

    }

    return (
        <>
            {alert.message && <Alert key={alert.id} type={alert.type} message={alert.message} />}
            <form className={`form ${classNames}`} onSubmit={middlewareForm}>
                <div className='form__grid'>
                    {fields.map(field => (
                        <FormField
                            key={field.inputId}
                            modifier={field.modifier}
                            inputId={field.inputId}
                            label={field.label}
                            inputName={field.inputName}
                            inputType={field.inputType}
                            placeholder={field.placeholder}
                            value={field.value}
                            handleChange={field.handleChange}
                            withError={errorField === field.inputId}
                        />
                    ))}
                </div>
                <input
                    type="submit"
                    value="Enviar"
                    className="form__submit"
                />
            </form>
        </>
    )
}
