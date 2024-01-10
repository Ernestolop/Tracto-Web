export const FormField = (props) => {
    const { modifier, inputId, label, inputName, inputType, placeholder, value, onChange } = props;

    return (
        <div className={`form__field form__field--${modifier}`}>
            <label htmlFor={inputId} className="form__label">{label}</label>
            <input
                autoComplete="off"
                className="form__input"
                id={inputId}
                name={inputName}
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
