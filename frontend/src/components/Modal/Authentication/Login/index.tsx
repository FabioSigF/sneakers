import React from "react";
import * as S from "../styles";

//Zod Forms
import { z, ZodType } from "zod";
//React Hook Form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../Button";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {
  isOpen: boolean;
};

interface LoginForm {
  email: string;
  password: string;
}

const Login = ({ isOpen }: Props) => {
  //Axios
  axios.defaults.withCredentials = true;

  const initialPayload: LoginForm = {
    email: "",
    password: "",
  };
  const schemaLogin: ZodType<LoginForm> = z.object({
    email: z
      .string()
      .email("Email inválido.")
      .nonempty("O email é obrigatório."),
    password: z
      .string()
      .min(6, "A senha deve ter ao menos 6 caracteres.")
      .max(30, "A senha pode ter no máximo 30 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({ resolver: zodResolver(schemaLogin) });

  const submitLogin = async (data: LoginForm) => {
    if (isOpen) {
      try {
        await axios
          .post("http://localhost:8800/users/login", data)
          .then((res) => {
            if (res.data.Status === "Success") {
              reset(initialPayload, { keepIsSubmitted: false });
              toast.success("Usuário logado com sucesso!");
            } else {
              toast.error("Houve um erro ao fazer login...");
            }
            console.log(res);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <S.Form>
      <S.InputContainer>
        <label>Email address</label>
        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </S.InputContainer>
      <S.InputContainer>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </S.InputContainer>
      <Button title="Login" onClick={handleSubmit(submitLogin)} dark />
    </S.Form>
  );
};

export default Login;
