'use client'
import { useState } from 'react';

export const ContactForm = () => {

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [productType, setProductType] = useState('');

    return (
        <form className="ctcform">
            <div className="ctcform__field ctcform__field--name">
                <label htmlFor="name" className="ctcform__label">Nombre y Apellido*</label>
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
            <div className="ctcform__field ctcform__field--company">
                <label htmlFor="company" className="ctcform__label">Empresa</label>
                <input
                    className="ctcform__input"
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nombre de la empresa"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                />
            </div>
            <div className="ctcform__field ctcform__field--email">
                <label htmlFor="email" className="ctcform__label">Email*</label>
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
            <div className="ctcform__field ctcform__field--phone">
                <label htmlFor="phone" className="ctcform__label">Celular*</label>
                <input
                    className="ctcform__input"
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Tu celular"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </div>
            <div className="ctcform__field ctcform__field--city">
                <label htmlFor="city" className="ctcform__label">Ciudad*</label>
                <input
                    className="ctcform__input"
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Tu ciudad"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />
            </div>
            <div className="ctcform__field ctcform__field--options">
                <span className="ctcform__label">Seleccione el tipo de producto*</span>
                <div className="ctcform__options">
                    <div className="ctcform__option">
                        <input
                            className="ctcform__radio"
                            type="radio"
                            name="productType"
                        />
                        <span>Tractores</span>
                    </div>
                    <div className="ctcform__option">
                        <input
                            className="ctcform__radio"
                            type="radio"
                            name="productType"
                        />
                        <span>Máquina vial</span>
                    </div>
                    <div className="ctcform__option">
                        <input
                            className="ctcform__radio"
                            type="radio"
                            name="productType"
                        />
                        <span>Implementos</span>
                    </div>
                </div>
            </div>
        </form>
    )
}
