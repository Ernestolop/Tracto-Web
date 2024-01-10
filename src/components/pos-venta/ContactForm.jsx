'use client'
import { useState } from 'react';
import { FormField, Alert } from '@/components'

export const ContactForm = () => {

    const [fieldToFocus, setFieldToFocus] = useState(null);

    const [alert, setAlert] = useState({
        type: '',
        message: '',
        timeoutId: null,
        id: 1
    });

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        city: '',
        productType: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleChangeRadio = e => {
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
        //Excuir campos no obligatorios
        if (emptyFields.includes('company')) {
            emptyFields.splice(emptyFields.indexOf('company'), 1);
        }
        //Verificar si hay campos vacios
        if (emptyFields.length > 0) {
            const firstEmptyField = emptyFields[0];
            setFieldToFocus(firstEmptyField);
            handleAlert('Por favor complete todos los campos obligatorios.', 'error');
            return;
        }

        //Validar email con expresion regular
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(formData.email)) {
            setFieldToFocus('email');
            handleAlert('Por favor ingrese un email válido.', 'error');
            return;
        }

        //validar que celular sea numerico
        const phoneRegex = /^[0-9]*$/;
        if (((!phoneRegex.test(formData.phone)) || formData.phone.length !== 12)){
            setFieldToFocus('phone');
            handleAlert('Por favor ingrese un celular válido.', 'error');
            return;
        }

        //Validar que los campos no superen los 255 caracteres
        const maxLength = 255;
        const fieldsToValidate = ['name', 'company', 'city'];
        fieldsToValidate.forEach(field => {
            if (formData[field].length > maxLength) {
                setFieldToFocus(field);
                handleAlert(`El campo ${field} no puede superar los ${maxLength} caracteres.`, 'error');
                return;
            }
        });

    }

    return (
        <>
            {alert.message && <Alert key={alert.id} type={alert.type} message={alert.message} />}
            <form onSubmit={handleSubmit} className="form">
                <div className='form__grid'>
                    <FormField
                        modifier="name"
                        inputId="name"
                        label="Nombre y Apellido*"
                        inputName="name"
                        inputType="text"
                        placeholder="Tu nombre y Apellido"
                        value={formData.name}
                        onChange={handleChange}
                        toFocus={(fieldToFocus === 'name')}
                    />
                    <FormField
                        modifier="company"
                        inputId="company"
                        label="Empresa"
                        inputName="company"
                        inputType="text"
                        placeholder="Nombre de la empresa"
                        value={formData.company}
                        onChange={handleChange}
                        toFocus={(fieldToFocus === 'company')}
                    />
                    <FormField
                        modifier="email"
                        inputId="email"
                        label="Email*"
                        inputName="email"
                        inputType="email"
                        placeholder="Tu email"
                        value={formData.email}
                        onChange={handleChange}
                        toFocus={(fieldToFocus === 'email')}
                    />
                    <FormField
                        modifier="phone"
                        inputId="phone"
                        label="Celular*"
                        inputName="phone"
                        inputType="tel"
                        placeholder="Formato: 595 XXX XXX XXX"
                        value={formData.phone.replace(/\s/g, '')}
                        onChange={handleChange}
                        toFocus={(fieldToFocus === 'phone')}
                    />
                    <FormField
                        modifier="city"
                        inputId="city"
                        label="Ciudad*"
                        inputName="city"
                        inputType="text"
                        placeholder="Tu ciudad"
                        value={formData.city}
                        onChange={handleChange}
                        toFocus={(fieldToFocus === 'city')}
                    />
                    <div className="form__field form__field--options">
                        <span className="form__label">Seleccione el tipo de producto*</span>
                        <div className="form__options">
                            <div className="form__option">
                                <input
                                    className="form__radio"
                                    type="radio"
                                    name="productType"
                                    onChange={handleChangeRadio}
                                    value="Tractores"
                                    checked={formData.productType === 'Tractores'}
                                    id='tractores'
                                />
                                <label htmlFor='tractores'>Tractores</label>
                            </div>
                            <div className="form__option">
                                <input
                                    className="form__radio"
                                    type="radio"
                                    name="productType"
                                    onChange={handleChangeRadio}
                                    value="Maquina vial"
                                    checked={formData.productType === 'Maquina vial'}
                                    id='maquina-vial'
                                />
                                <label htmlFor='maquina-vial'>Máquina vial</label>
                            </div>
                            <div className="form__option">
                                <input
                                    className="form__radio"
                                    type="radio"
                                    name="productType"
                                    onChange={handleChangeRadio}
                                    value="Implementos"
                                    checked={formData.productType === 'Implementos'}
                                    id='implementos'
                                />
                                <label htmlFor='implementos'>Implementos</label>
                            </div>
                        </div>
                    </div>
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
