export default function Input({
  label,
  name,
  value,
  register,
  defaultValue,
  error,
  required,
  ...rest
}) {
  return (
    <>
      <div className="form-control border-0">
        <label
          htmlFor={name}
          className={`${required && "required"} form-label fs-5 py-0 w-100`}
        >
          {label}
        </label>

        <input
          id={name}
          name={name}
          defaultValue={defaultValue}
          className="form-control"
          required={required}
          {...register(name)}
          {...rest}
        />
        
        {error && <span>{error?.message}</span>}

        {value}

        <div id={name + "Help"} className="form-text text-uppercase mt-1">
          {required === true ? "Obrigatório" : "Opcional"}
        </div>
      </div>
    </>
  );
}
