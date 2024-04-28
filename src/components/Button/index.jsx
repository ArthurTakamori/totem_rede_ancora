export default function Button({ name, type }) {
  return (
    <>
      <button type={type} className="btn btn-primary btn-lg">
        {name}
      </button>
    </>
  );
}
