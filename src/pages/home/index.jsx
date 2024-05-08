import HeaderProject from "@/components/Header/Project";
import FooterProject from "@/components/Footer/Project";

export default function Home() {

  return (
    <>
      <div className="overflow-y-auto d-flex flex-column" style={{
          minHeight: '100vh'
      }}>

          <HeaderProject />

          <div className="mt-4 flex-grow-1 px-5 d-flex align-items-center  justify-content-center">

              <div className="row g-5 align-items-strecth">

                <div className="col-6">
                  <div className="h-100 border bg-white p-5 rounded-1">
                    <h2 className="mb-4 fw-bold fs-5">
                      Integrantes
                    </h2>

                    <div>
                      <ul>
                        <li className="d-flex">
                          <Member name={'Arthur Takamori'}/>
                        </li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="h-100 border bg-white p-5 rounded-1">
                    <h2 className="mb-4 fw-bold fs-5">
                      Tecnologias utilizadas
                    </h2>
                  </div>
                </div>
                
              </div>

          </div>

          <FooterProject />
          
      </div>
    </>
  );
}

const Member = ({name}) => {
  const firstLetterName = name.charAt(0)

  return (
    <>
      <Avatar firstLetterName={firstLetterName}/>
    </>
  )
}

const Avatar = ({ firstLetterName }) => {

  return (

    <div className="rounded-circle border d-flex align-items-center justify-content-center p-4" style={{
      width: '1.5rem',
      height: '1.5rem',
    }}>
      
      <span className="text-primary fw-bold">
        {firstLetterName}
      </span>
    </div>
    
  );
};
  
  