import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { users } from "@/data/users.js";
import Keyboard from "@/components/Keyboard";

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório."),
  cpf: yup
    .string()
    .min(11, "O CPF deve ter no mínimo 11 caracteres.")
    .required("O CPF é obrigatório."),
  phone: yup
    .string()
    .min(10, "O telefone deve conter no mínimo 10 caracteres incluindo o DDD.")
    .required("O telefone é obrigatório."),
  email: yup
    .string()
    .email("Este formato de e-mail é inválido.")
    .required("O e-mail é obrigatório."),
  cars: yup.array().of(
    yup.object().shape({
      license_plate: yup
        .string()
        .transform((value) => value.replace(/-/g, ""))
        .matches(
          /^[A-Za-z]{3}[0-9]{1}[A-Za-z0-9]{1}[0-9]{2}$/,
          "A placa do veículo é inválida."
        )
        .required("A placa do veículo é obrigatória."),
    })
  ),
});

export default function Profile({ user, setUser, setMessageAlert }) {
  const [showCpf, setShowCpf] = useState(true);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [ fieldSelected, setField ] = useState(null);
  
  const toastBtn = document.getElementById('toastAlertBtn')

  const maxLengthLicenseCar = 3;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const formProfile = {
    name: watch('name'),
    cpf: watch('cpf'),
    phone: watch('phone'),
    email: watch('email'),
    'cars[0].license_plate': watch('cars[0].license_plate'),
    'cars[1].license_plate': watch('cars[1].license_plate'),
    'cars[2].license_plate': watch('cars[2].license_plate')
  }

  const uppercaseInputs = [
    'cars[0].license_plate',
    'cars[1].license_plate',
    'cars[2].license_plate',
  ]

  function userAdd(userUpdate) {
    users.push(userUpdate);
    setUser(userUpdate);
  }

  const addCar = () => {
    const newCar = { license_plate: "" };

    if (user.cars.length === maxLengthLicenseCar) return;

    setUser((prevState) => ({
      ...prevState,
      cars: [...prevState.cars, newCar],
    }));
  };

  const deleteLicenseCar = (index) => {
    if (user.cars.length === 1) return;

    var userCars = user.cars;
    userCars.splice(index, 1);
    
    setUser((prevState) => ({
      ...prevState,
      cars: [...userCars],
    }));
  }

  const handleShowKeyboard = (field) => {
    setField(field);
    setShowKeyboard(true)
  }

  const handleHiddenKeyboard = () => {
    setField(null);
    setShowKeyboard(false)
  }

  const handleSetModelValue = (value) => {
    setValue(fieldSelected, value)
  }

  const handleClickSubmit = () => {
    setMessageAlert('Dados alterados com sucesso!')
    setTimeout(() => toastBtn.click(), 200);
  }

  return (
    <>
      <Title page={"Minha Conta"} />

      <div
        className="overflow-y-auto"
        style={{
          height: "calc(100% - 15rem)",
          padding: '2rem'
        }}
      >
        <form
          onSubmit={handleSubmit(userAdd)}
          autoComplete="off"
          className="h-100"
        >
          <fieldset className="d-flex flex-column gap-4">
            <Input
              label="Nome completo"
              name="name"
              defaultValue={user?.name}
              register={register}
              error={errors?.name}
              required
              showKeyboard={() => handleShowKeyboard('name')}
            />
            <div className="position-relative">
              <Input
                label="CPF"
                name="cpf"
                type={showCpf === true ? "text" : "password"}
                defaultValue={user?.cpf}
                register={register}
                error={errors?.cpf}
                required
                showKeyboard={() => handleShowKeyboard('cpf')}
              />
              <button
                className="border-0 position-absolute"
                style={{
                  top: '60px',
                  right: '20px'
                }}
                type="button"
                onClick={() => setShowCpf(!showCpf)}
              >
                <span
                  className={`${showCpf ? "mgc_eye_2_line" : "mgc_eye_close_line"
                    } fs-1`}
                />
              </button>
            </div>
            <Input
              label="Telefone"
              name="phone"
              defaultValue={user?.phone}
              register={register}
              error={errors?.phone}
              required
              showKeyboard={() => handleShowKeyboard('phone')}
            />
            <Input
              label="E-mail"
              name="email"
              defaultValue={user?.email}
              register={register}
              error={errors?.email}
              required
              showKeyboard={() => handleShowKeyboard('email')}
            />

            <div className="p-4 border rounded">

              <span className="fw-medium fs-2">Meus veículos</span>
              <p className="fs-5 opacity-75">Informe seus veículos abaixo para encontrar seus produtos com facilidade!</p>

              <div className="mt-4">
                <label className="form-label fs-4 py-0 w-100">Placa do carro</label>

                {user.cars.map((car, index) => (
                  <div key={index} className="d-flex align-items-center position-relative gap-4">

                    <div className="w-100">
                      <input
                        className="form-control me-3"
                        type="text"
                        name={`cars[${index}].license_plate`}
                        {...register(`cars[${index}].license_plate`)}
                        defaultValue={car.license_plate}
                        onClick={() => handleShowKeyboard(`cars[${index}].license_plate`)}
                      />
                      {errors?.cars && (
                        <span className="fs-5 text-danger my-2 d-block">
                          {errors?.cars[index]?.license_plate?.message}
                        </span>
                      )}
                      
                    </div>
                    
                    {(() => {
                      if (index > 0) {
                        return (
                          <button type="button"
                            className="mt-2 p-2 rounded-circle bg-primary d-flex align-items-center justify-content-center"
                            onClick={() => deleteLicenseCar(index)}>
                            <span className="mgc_close_line fs-4 icon-white"></span>
                          </button>
                        );
                      }
                    })()}


                  </div>
                ))}

                <div className="form-text text-uppercase mt-1">
                  Opcional
                </div>

                <button
                  type="button"
                  className="btn border border-secondary bg-white fw-medium fs-4 px-5 py-2 mt-4 d-flex align-items-center justify-content-center gap-2"
                  onClick={addCar}
                  disabled={user.cars.length === maxLengthLicenseCar}
                >
                  <span className="mgc_add_fill"></span>
                  Incluir veículo
                </button>
              </div>

            </div>

            <div className="d-flex w-100 justify-content-end mt-4">
              <Button name={"Atualizar dados cadastrais"} type="submit" handleClick={handleClickSubmit}/>
            </div>
          </fieldset>
        </form>
      </div>

      <Keyboard showKeyboard={showKeyboard}
                modelValue={formProfile[fieldSelected]}
                uppercase={uppercaseInputs.includes(fieldSelected)}
                handleEnterKeyboard={handleHiddenKeyboard}
                setModelValue={handleSetModelValue}
                isInput={true} />
    </>
  );
}
