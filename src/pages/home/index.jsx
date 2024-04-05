import Modal from "../../components/Modal";

export default function Home({produtos}) {
  
  return (
    <>
      <h1 className="col-md-9">Home</h1>

      {/* <button onClick={() => setProdutos({ 
        nome: 'produto novo',
      })}>
        Clique aqui 
      </button> */}

      <Modal />
    </>
  );
}
