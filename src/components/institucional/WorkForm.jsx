'use client'
import { useState } from 'react';

export const WorkForm = () => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [file, setFile] = useState('');

    return (
        <form className="ctcform">
            <div className="ctcform__field">
                <label htmlFor="name" className="ctcform__label">Nombre y Apellido completo*</label>
                <input
                    className="ctcform__input"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre y Apellido"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="ctcform__field">
                <label htmlFor="email" className="ctcform__label">Correo electrónico*</label>
                <input
                    className="ctcform__input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Tu email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="ctcform__field">
                <label htmlFor="position" className="ctcform__label">Departamento al que se postula</label>
                <input
                    className="ctcform__input"
                    id="position"
                    name="position"
                    type="text"
                    placeholder="Nombre de la empresa"
                    value={position}
                    onChange={e => setPosition(e.target.value)}
                />
            </div>
            <div className="ctcform__field">
                <label htmlFor="cv" className="ctcform__label">Adjuntar CV*</label>
                <input
                    className="ctcform__input"
                    id="cv"
                    name="cv"
                    type="file"
                    placeholder="Carga tu CV"
                    value={file}
                    onChange={e => setFile(e.target.value)}
                />
            </div>
            <input type="submit" value="Enviar" className="ctcform__field--submit ctcform__submit" />
        </form>
    )
}
