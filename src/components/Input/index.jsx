export default function Input({ onChange, value, onBlur, name, label, required, type = 'text' }) {

  return (
    <>
      <div style={{}}>
          
          <label htmlFor={name} className="form-label fs-5 py-0">
            {label} 
          </label>

          <input
            required={required}
            value={value}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            className="form-control"
            name={name}
            id={name}
          />

          {value}

          <div id={name+"Help"} className="form-text text-uppercase mt-1">
            {required === true ? 'Obrigatório' : 'Opcional'}
          </div>

      </div>

    </>
  );
}
