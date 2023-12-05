function InputField({ id, label, type = "text", value, onChange, error }) {

    return (
        <div className={"form-ctn"}>
            <label >{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={error || ''}
            />
        </div>
    );
}

export default InputField;