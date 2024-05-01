import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { hideCPF, maskCpf } from "../../utils/maskCpf";
import Title from "../../components/Title";
import { Controller } from "react-hook-form";
import { getUser } from "../../state/userState";

export default function Profile() {
  const [showCpf, setShowCpf] = useState(true);
  const user = getUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: user.name,
      cpf: user.cpf,
      phone: user.phone,
      email: user.email,
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="container-main">
        <Title page={"Minha conta"} />

        <main>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Nome completo"
                  value={value}
                  onChange={onChange}
                />
              )}
              name="fullName"
            />
            {errors.fullName && <Text>This is required.</Text>}

            <div className="position-relative">
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 14,
                  maxLength: 14,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    label={"CPF"}
                    value={showCpf === false ? hideCPF(value) : value}
                    onChange={(e) => onChange(maskCpf(e.target.value))}
                  />
                )}
                name="cpf"
              />
              {errors.cpf && <Text>This is required.</Text>}

              <div className="position-relative">
                <button
                  type="button"
                  onClick={() => setShowCpf(!showCpf)}
                  className="position-absolute"
                  style={{
                    top: "-88px",
                    right: "15px",
                  }}
                >
                  <span
                    className={`${
                      showCpf ? "mgc_eye_2_line" : "mgc_eye_close_line"
                    } fs-1`}
                  />
                </button>
              </div>
            </div>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label={"Telefone"}
                  value={value}
                  onChange={onChange}
                  type={"tel"}
                />
              )}
              name="phone"
            />
            {errors.phone && <Text>This is required.</Text>}

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label={"E-mail"}
                  value={value}
                  onChange={onChange}
                  type={"email"}
                />
              )}
              name="email"
            />
            {errors.email && <Text>This is required.</Text>}

            <div className="d-flex w-100 justify-content-end mt-4">
              <Button name={"Atualizar dados cadastrais"} type={"submit"} />
            </div>
          </form>
        </main>
      </div>
    </>
  );
}
