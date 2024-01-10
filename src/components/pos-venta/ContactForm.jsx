'use client'
import { useState } from 'react';
import { FormField } from '@/components'

export const ContactForm = () => {

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

    const handleSubmit = e => { e.preventDefault(); }

    return (
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
                />
                <FormField
                    modifier="phone"
                    inputId="phone"
                    label="Celular*"
                    inputName="phone"
                    inputType="tel"
                    placeholder="Tu celular"
                    value={formData.phone}
                    onChange={handleChange}
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
                />
                <div className="form__field form__field--options">
                    <span className="form__label">Seleccione el tipo de producto*</span>
                    <div className="form__options">
                        <div className="form__option">
                            <input
                                className="form__radio"
                                type="radio"
                                name="productType"
                                id='tractores'
                            />
                            <label htmlFor='tractores'>Tractores</label>
                        </div>
                        <div className="form__option">
                            <input
                                className="form__radio"
                                type="radio"
                                name="productType"
                                id='maquina-vial'
                            />
                            <label htmlFor='maquina-vial'>Máquina vial</label>
                        </div>
                        <div className="form__option">
                            <input
                                className="form__radio"
                                type="radio"
                                name="productType"
                                id='implementos'
                            />
                            <label htmlFor='implementos'>Implementos</label>
                        </div>
                    </div>
                </div>
            </div>
            <input
                onSubmit={handleSubmit}
                type="submit"
                value="Enviar"
                className="form__submit"
            />
        </form>


    )
}
