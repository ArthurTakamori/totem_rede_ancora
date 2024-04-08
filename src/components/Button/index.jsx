import { useNavigate } from "react-router-dom";

export default function Button() {

  const navegar = useNavigate();
  const navegarParaPagina =()=>{
    navegar('/#')
  }

  return (
    <>
    <button onClick={()=>navegarParaPagina()}>Botão</button>
    </>
  );
}
