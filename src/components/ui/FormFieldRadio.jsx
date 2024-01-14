import React from 'react'

export const FormFieldRadio = ({ options, label, inputName, inputType, value, handleChange, withError }) => {
    return (
        <div className="form__field form__field--options">
            <span className={`form__label ${withError ? 'form__label--error' : ''}`}>{label}</span>
            <div className="form__options">
                {options.map(option =>
                    <div className="form__option" key={option.value}>
                        <input
                            className="form__radio"
                            type={inputType}
                            name={inputName}
                            onChange={e => handleChange(e.target.value)}
                            value={option.value}
                            checked={value === option.value}
                            id={option.value}
                        />
                        <label htmlFor={option.value}>{option.label}</label>
                    </div>
                )}
            </div>
        </div>
    )
}
