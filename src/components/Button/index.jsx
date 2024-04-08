import { useNavigate } from "react-router-dom";

export default function Button() {

  const navegar = useNavigate();
  const navegarParaPagina =()=>{
    navegar('/identify')
  }

  return (
    <>
      <button onClick={()=>navegarParaPagina(navegar)}>Toque para começar</button>
    </>
  );
}
