export default function Input({props}) {
  const { label, value, setValue, type, name, required, mask } = props;

  return (
    <>
      <div className="mb-3">

          <label for={name} class="form-label required fs-5">
            {label}
          </label>

          <input
            required={required}
            value={value}
            type={type}
            onChange={e => setValue(mask ? mask(e.target.value) : e.target.value)}
            className="form-control"
            name={name}
            id={name}
          />

          <div id={name+"Help"} class="form-text text-uppercase mt-1">
            {required === true ? 'Obrigatório' : 'Opcional'}
          </div>

      </div>

    </>
  );
}
