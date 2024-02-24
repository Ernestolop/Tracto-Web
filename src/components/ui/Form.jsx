'use client'
import { useState } from 'react';
import { FormField, Alert, FormFieldRadio } from '@/components'


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

    const middlewareForm = async e => {
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
                        if (field.validations.equal) {
                            const valueToCompare = field.value.replace(/\s/g, '');
                            if (!field.validations.regex.value.test(valueToCompare.trim())) {
                                setErrorField(field.inputId);
                                throw new Error(field.validations.equal.errorMessage);
                            }
                        }
                        if (field.validations.equalLength) {
                            const valueToCompare = field.value.replace(/\s/g, '');
                            if (valueToCompare.trim().length !== field.validations.equalLength.value) {
                                setErrorField(field.inputId);
                                throw new Error(field.validations.equalLength.errorMessage);
                            }
                        }
                    }
                }

            });

            //Enviar al servidor
            const response = await sendData();
            if (response.code !== 200) {
                throw new Error(response.message);
            }

            handleAlert(response.message, 'success', 6000);

        } catch (error) {
            handleAlert(error.message, 'error', 6000);
        }

    }

    return (
        <>
            {alert.message && <Alert key={alert.id} type={alert.type} message={alert.message} />}
            <form className='form' onSubmit={middlewareForm}>
                <div className={`${classNames}`}>
                    {fields.map(field =>
                        field.inputType === 'radio' ?
                            (
                                <FormFieldRadio
                                    key={field.inputId}
                                    inputId={field.inputId}
                                    label={field.label}
                                    inputName={field.inputName}
                                    inputType={field.inputType}
                                    value={field.value}
                                    handleChange={field.handleChange}
                                    withError={errorField === field.inputId}
                                    options={field.options}
                                />
                            )
                            :
                            (
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
                                    accept={field.accept}
                                    required={field.required}
                                />
                            )
                    )}
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
