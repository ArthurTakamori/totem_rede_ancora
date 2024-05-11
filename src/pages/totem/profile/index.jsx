import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { users } from "@/data/users.js";

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  cpf: yup
    .string()
    .min(11, "O CPF deve ter no mínimo 11 caracteres")
    .required("O CPF é obrigatório"),
  phone: yup
    .string()
    .min(10, "O telefone deve conter no mínimo 10 caracteres incluindo o DDD ")
    .required("O telefone é obrigatório"),
  email: yup
    .string()
    .email("Este formato de e-mail é inválido")
    .required("O e-mail é obrigatório"),
  cars: yup.array().of(
    yup.object().shape({
      license_plate: yup
        .string()
        .transform((value) => value.replace(/-/g, ""))
        .matches(
          /^[A-Za-z]{3}[0-9]{1}[A-Za-z0-9]{1}[0-9]{2}$/,
          "A placa do veículo é inválida"
        )
        .required("A placa do veículo é obrigatória"),
    })
  ),
});

export default function Signing({ user, setUser }) {
  const [showCpf, setShowCpf] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function userAdd(userUpdate) {
    users.push(userUpdate);

    setUser(userUpdate);
  }

  const addCar = () => {
    // Cria um novo objeto de carro com uma placa vazia
    const newCar = { license_plate: "" };

    // Atualiza o estado com o novo objeto de carro
    setUser((prevState) => ({
      ...prevState,
      cars: [...prevState.cars, newCar],
    }));
  };

  return (
    <>
      <Title page={"Minha Conta"} />
      <div
        className="col-12 col-md-12 bg-white overflow-y-auto mb-1"
        style={{ maxHeight: "70%" }}
      >
        <form
          onSubmit={handleSubmit(userAdd)}
          autoComplete="off"
          className="px-4 py-4 "
        >
          <fieldset className="d-flex flex-column gap-2">
            <Input
              label="Nome completo"
              name="name"
              defaultValue={user?.name}
              register={register}
              error={errors?.name}
              required
            />
            <div className="input-group">
              <Input
                label="CPF"
                name="cpf"
                type={showCpf === true ? "text" : "password"}
                defaultValue={user?.cpf}
                register={register}
                error={errors?.cpf}
                required
              />
              <button
                className="btn btn-outline-secondary border-0"
                type="button"
                onClick={() => setShowCpf(!showCpf)}
              >
                <span
                  className={`${
                    showCpf ? "mgc_eye_2_line" : "mgc_eye_close_line"
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
            />
            <Input
              label="E-mail"
              name="email"
              defaultValue={user?.email}
              register={register}
              error={errors?.email}
              required
            />

            <div className="form-control border-0">
              <label>Placa do carro:</label>
              {user.cars.map((car, index) => (
                <div key={index} className="d-flex align-items-center mb-3">
                  <input
                    className="form-control me-3"
                    type="text"
                    name={`cars[${index}].license_plate`}
                    {...register(`cars[${index}].license_plate`)}
                    defaultValue={car.license_plate}
                  />
                  {errors?.cars && (
                    <span className="text-danger">
                      {errors?.cars[index]?.license_plate?.message}
                    </span>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="btn btn-primary"
                onClick={addCar}
              >
                Adicionar Carro
              </button>
            </div>

            <div className="d-flex w-100 justify-content-end mt-4">
              <Button name={"Atualizar dados cadastrais"} type="submit" />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
