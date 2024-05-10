import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { hideCPF, maskCpf } from "@/utils/maskCpf";
import Title from "@/components/Title";
import { Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

const schema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  cpf: yup.string().min(11, 'O CPF deve ter no mínimo 11 caracteres').required('O CPF é obrigatório'),
  phone: yup.string().min(10, 'O telefone deve conter no mínimo 10 caracteres incluindo o DDD ').required('O telefone é obrigatório'),
  email: yup.string().email('Este formato de e-mail é inválido').required('O e-mail é obrigatório'),
  // license_plate: yup.string().length(7, 'O número da placa deve conter 7 caracteres').required('O número da placa do veículo é obrigatório')
})

// {
//   name: "Carlos Oliveira",
//   email: "carlos.oliveira@example.com",
//   phone: "(11) 87654-3210",
//   cpf: "876.543.210-99",
//   cars: [
//     {
//       license_plate: "JKL-3456",
//     },
//   ],
// }

export default function Signing(){
  
const [userList, setUserList] = useState([])
const [showCpf, setShowCpf] = useState(true);
const {register, handleSubmit, formState:{errors}} = useForm({resolver:yupResolver(schema)})

function userAdd(user){
  setUserList([...userList, user])
  console.log(user)
}

  return(
    <>
      <Title page={"Minha Conta"}/>

      <form onSubmit={handleSubmit(userAdd)} autoComplete="off" className="px-4">
        <fieldset className="d-flex flex-column gap-3">
        <div>
            <label className="required">Nome completo</label>
              <Input type="text" 
              required={true}
              {...register("name")}
              />
              <span>{errors.name?.message}</span>
          </div>
          <div className="col-12 col-md-12 p-0">
            <div className='d-flex align-items-center justify-content-between w-100'>
              <label className="required">CPF</label>
              <button
                type="button"
                onClick={() => setShowCpf(!showCpf)}
                className='rounded-circle d-flex align-items-center justify-content-center'
                style={{
                  display:"flex",
                }}
                >
                <span
                  className={`${
                    showCpf ? "mgc_eye_2_line" : "mgc_eye_close_line"
                  } fs-1`}
                />
                </button>
              </div>
              <Input type={showCpf === true ? 'text' : 'password'}
              required={true} 
              {...register("cpf")}
              />
            </div>
            <span>{errors.cpf?.message}</span>
          
          <div>
            <label className="required">Telefone</label>
              <Input type="number"
              required={true}
              maxLength="11" 
              {...register("phone")}
              />
              <span>{errors.phone?.message}</span>
          </div>

          <div>
            <label className="required">E-mail</label>
              <Input type="text"
              required={true} 
              {...register("email")}
              />
              <span>{errors.email?.message}</span>
          </div>

          <div>
            <label className="notRequired">Placa do Carro</label>
              <Input type="text"
              required={false} 
              {...register("license_plate")}
              />
              <span>{errors.license_plate?.message}</span>
          </div>

          <div className="d-flex w-100 justify-content-end mt-4">
            <Button name={"Atualizar dados cadastrais"} type="submit"/>
          </div>
        </fieldset>
      </form>
    </>
  )
}
