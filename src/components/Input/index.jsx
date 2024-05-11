export default function Input({
  label,
  name,
  value,
  register,
  defaultValue,
  error,
  required,
  showKeyboard,
  ...rest
}) {
  return (
    <>
      <div className="border-0">
        <label
          htmlFor={name}
          className={`${required && "required"} form-label fs-4 py-0 w-100`}
        >
          {label}
        </label>

        <input
          id={name}
          name={name}
          defaultValue={defaultValue}
          className="form-control w-100"
          required={required}
          {...register(name)}
          {...rest}
          onClick={() => showKeyboard()}
        />
        
        {error ? <small className="fs-5 text-danger mt-2 d-block">{error?.message}</small> : ''}

        <div id={name + "Help"} className="form-text text-uppercase mt-1">
          {required === true ? "Obrigatório" : "Opcional"}
        </div>
      </div>
    </>
  );
}
