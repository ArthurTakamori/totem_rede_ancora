export default function Toast({ message }) {
return (
    <>
      <button type="button" 
              className="d-none" 
              id="toastAlertBtn"></button>

      <div className="toast-container position-fixed top-0 end-0 p-3">
        <div id="toastAlert" className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="2000">
          <div className="toast-header">
            <strong className="me-auto">Rede ancora</strong>
            <small>Agora</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body">
            {message}
          </div>
        </div>
      </div>
    </>
  );
}
