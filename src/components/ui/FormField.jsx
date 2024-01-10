'use client'

import { useRef, useEffect } from "react";

export const FormField = ({ modifier, inputId, label, inputName, inputType, placeholder, value, handleChange, withError, accept }) => {

    const inputRef = useRef(null);

    useEffect(() => {
        if (withError) {
            inputRef.current.focus();
        }
    }, [withError]);

    return (
        <div className={`form__field form__field--${modifier}`}>
            <label htmlFor={inputId} className="form__label">{label}</label>
            <input
                ref={inputRef}
                autoComplete="off"
                className={`form__input ${withError ? 'form__input--focus' : ''}`}
                id={inputId}
                name={inputName}
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={e => handleChange(e.target.value)}
                required
                accept={accept}
            />
        </div>
    )
}
