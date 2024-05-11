export default function Button({ name, type, handleClick }) {
  return (
    <>
      <button type={type} className="btn btn-primary btn-lg fs-3 mb-4 px-5" onClick={() => handleClick()}>
        {name}
      </button>
    </>
  );
}
