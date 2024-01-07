'use client'
import { useState } from 'react';

export const WorkForm = () => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState('');

    const handleSubmit = e => { e.preventDefault(); }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form--workhere'>
                <div className="form__field">
                    <label htmlFor="name" className="form__label">Nombre y Apellido completo*</label>
                    <input
                        className="form__input"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tu nombre y Apellido"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form__field">
                    <label htmlFor="email" className="form__label">Correo electrónico*</label>
                    <input
                        className="form__input"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Tu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form__field">
                    <label htmlFor="position" className="form__label">Departamento al que se postula</label>
                    <input
                        className="form__input"
                        id="position"
                        name="position"
                        type="text"
                        placeholder="Nombre de la empresa"
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                    />
                </div>
                <div className="form__field">
                    <label htmlFor="cv" className="form__label">Adjuntar CV*</label>
                    <input
                        className="form__input form__input--file"
                        id="cv"
                        name="cv"
                        type="file"
                        placeholder="Carga tu CV"
                        value={file}
                        onChange={e => setFile(e.target.value)}
                    />
                </div>
            </div>
            <input type="submit" value="Enviar" className="form__field--submit form__submit" />
        </form>
    )
}
