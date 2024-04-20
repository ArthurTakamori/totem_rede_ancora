import { useState } from 'react';
import HeaderHome from "../../components/Header/Home";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import Button from '../../components/Button';
import { hideCPF, maskCpf } from "../../utils/maskCpf";
import Title from '../../components/Title';

export default function Profile() {
  
  const [show, setShow] = useState(true);

  const [ name, setName ]   = useState('Mariana');
  const [ cpf, setCpf ]     = useState('12321313.121321');
  const [ phone, setPhone ] = useState('119999-9999');
  const [ email, setEmail ] = useState('teste@testem.com');

  let notShow = hideCPF(cpf);

  return (
    <>
      <div className="container-main">

        <HeaderHome />
        <Title page={'Minha conta'} />

        <main>

          <form autoComplete="off">
            
            <Input props={{
                required: true,
                label: 'Nome completo',
                value: name,
                setValue: setName,
                type: 'text',
                name: 'name',
              }}
            />

            <div className="position-relative">
              
              <Input props={{
                  required: true,
                  label: 'CPF',
                  value: show ? cpf : notShow,
                  setValue: setCpf,
                  type: 'tel',
                  name: 'cpf',
                  mask: maskCpf
                }}
              />  

              <button type="button" onClick={() => setShow(!show)}
                      className="position-absolute"
                      style={{
                        top: '50px',
                        right: '15px'
                      }}>
                <span
                  className={`${
                    show ? "mgc_eye_2_line" : "mgc_eye_close_line"
                  } fs-1`}
                />
              </button>

            </div>

            <Input props={{
                label: 'Telefone',
                value: phone,
                setValue: setPhone,
                type: 'tel',
                name: 'phone',
              }}
            />  

            <Input props={{
                label: 'E-mail',
                value: email,
                setValue: setEmail,
                type: 'email',
                name: 'email',
              }}
            /> 

            <div className="d-flex w-100 justify-content-end mt-4">

              <Button props={{
                name: 'Atualizar dados cadastrais',
                type: 'submit'
              }}/>

            </div>


          </form>

        </main>

        <Navbar  />

      </div>
    </>
  );
}
