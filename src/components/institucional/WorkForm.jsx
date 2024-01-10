'use client'
import { useState } from 'react';
import { FormField } from '@/components'

export const WorkForm = () => {

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

    const handleSubmit = e => { e.preventDefault(); }

    return (
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
                />
                <FormField
                    inputId="email"
                    label="Correo electrónico*"
                    inputName="email"
                    inputType="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <FormField
                    inputId="position"
                    label="Departamento al que se postula"
                    inputName="position"
                    inputType="text"
                    placeholder="Nombre de la empresa"
                    value={formData.position}
                    onChange={handleChange}
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
                />
            </div>
            <input type="submit" value="Enviar" className="form__field--submit form__submit" />
        </form>
    )
}
