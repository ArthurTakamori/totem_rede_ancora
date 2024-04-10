import { useNavigate } from "react-router-dom";

export default function Button({props}) {
  const { name, type } = props;
  
  const navegar = useNavigate();
  
  const navegarParaPagina = () => {
    navegar("/identify");
  };

  return (
    <>
      <button type={type} className="btn btn-primary btn-lg">
        {name}
      </button>
    </>
  );
}
