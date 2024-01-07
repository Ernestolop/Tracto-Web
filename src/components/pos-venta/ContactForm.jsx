'use client'
import { useState } from 'react';

export const ContactForm = () => {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = e => { e.preventDefault(); }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className='form__grid'>
                <div className="form__field form__field--name">
                    <label htmlFor="name" className="form__label">Nombre y Apellido*</label>
                    <input
                        autoComplete="off"
                        className="form__input"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tu nombre y Apellido"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form__field form__field--company">
                    <label htmlFor="company" className="form__label">Empresa</label>
                    <input
                        autoComplete="off"
                        className="form__input"
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Nombre de la empresa"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                    />
                </div>
                <div className="form__field form__field--email">
                    <label htmlFor="email" className="form__label">Email*</label>
                    <input
                        autoComplete="off"
                        className="form__input"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Tu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form__field form__field--phone">
                    <label htmlFor="phone" className="form__label">Celular*</label>
                    <input
                        autoComplete="off"
                        className="form__input"
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Tu celular"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </div>
                <div className="form__field form__field--city">
                    <label htmlFor="city" className="form__label">Ciudad*</label>
                    <input
                        autoComplete="off"
                        className="form__input"
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Tu ciudad"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </div>
                <div className="form__field form__field--options">
                    <span className="form__label">Seleccione el tipo de producto*</span>
                    <div className="form__options">
                        <div className="form__option">
                            <input
                                className="form__radio"
                                type="radio"
                                name="productType"
                            />
                            <span>Tractores</span>
                        </div>
                        <div className="form__option">
                            <input
                                className="form__radio"
                                type="radio"
                                name="productType"
                            />
                            <span>Máquina vial</span>
                        </div>
                        <div className="form__option">
                            <input
                                className="form__radio"
                                type="radio"
                                name="productType"
                            />
                            <span>Implementos</span>
                        </div>
                    </div>
                </div>
            </div>
            <input onSubmit={handleSubmit} type="submit" value="Enviar" className="form__submit" />
        </form>
    )
}
