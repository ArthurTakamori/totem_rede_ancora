export default function Title({ page }) {

  const keys = [
    [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    ],
    [
      'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'
    ],
    [
      'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'
    ],
    [
      null, 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'
    ],
    [
      'Espaço'
    ],
  ];

  return (
    <>
      <div className="position-absolute  fixed-bottom">

        <div className="bg-white border w-100 text-white d-flex align-items-center justify-content-center" style={{ minHeight: '300px', zIndex: '10' }}>

          <div className="flex-grow-1">

            {keys.map((items, index) => (
              <ul key={index} className={`d-flex align-items-center w-100 ${index === 1 ? 'px-4' : ''} ${index === 2 ? 'px-5' : ''} ${index === 4 ? 'px-2' : ''}`}>

                {items.map((key, subIndex) => (

                  <li key={subIndex} className="flex-grow-1 m-1 d-flex">

                    <span className="text-center rounded-2 bg-white text-primary p-2 w-100 fw-medium">{key}</span>

                  </li>

                ))}

              </ul>
            ))}

          </div>


        </div>

      </div>
    </>
  );
}
