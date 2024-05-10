import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { hideCPF, maskCpf } from "@/utils/maskCpf";
import Title from "@/components/Title";
import { Controller } from "react-hook-form";
import { getUser } from "@/state/userState";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"


export default function Signing(){
  
const [userList, setUserList] = useState([])
const {register, handleSubmit, formState:{errors}, setValue, setFocus} = useForm({})

function userAdd(user){
  setUserList([...userList, user])
  console.log(user)
}

  return(
    <>
      <Title page={"Minha Conta"}/>

      <form onSubmit={handleSubmit(userAdd)} autoComplete="off" className="px-4">
        <fieldset>
          <label>Nome completo
            <input type="text" 
            {...register("nome")} 
          />
          </label>
          <label>CPF
            <input type="text" 
            {...register("cpf")}
          />
          </label>
          <label>Telefone
            <input type="text" 
            {...register("telefone")}
          />
          </label>
          <label>E-mail
            <input type="text" 
            {...register("email")}
          />
          </label>

          <div className="d-flex w-100 justify-content-end mt-4">
            <Button name={"Atualizar dados cadastrais"} type="submit"/>
          </div>
        </fieldset>
      </form>
    </>


  
  
  )
}
