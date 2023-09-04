import React from "react";
import Button from "../../../Button";
import * as S from "../styles";

//Zod Forms
import { z, ZodType } from "zod";
//React Hook Form
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {
  isOpen: boolean;
};

interface RegisterForm {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  confirmPassword: string;
}

const Register = ({ isOpen }: Props) => {
  //Axios
  axios.defaults.withCredentials = true;

  const initialPayload: RegisterForm = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
  };

  const schemaRegister: ZodType<RegisterForm> = z
    .object({
      email: z
        .string()
        .email("Email inválido.")
        .nonempty("O email é obrigatório."),
      first_name: z
        .string()
        .min(2, "O nome precisa ter ao menos 2 letras.")
        .max(30, "O nome pode ter no máximo 30 letras.")
        .transform((name) => {
          return name
            .trim()
            .split(" ")
            .map((word) => {
              return word[0].toLocaleUpperCase().concat(word.substring(1));
            })
            .join(" ");
        }),
      last_name: z
        .string()
        .min(2, "O sobrenome precisa ter ao menos 2 letras.")
        .max(30, "O sobrenome pode ter no máximo 30 letras."),
      password: z
        .string()
        .min(6, "A senha deve ter ao menos 6 caracteres.")
        .max(30, "A senha pode ter no máximo 30 caracteres"),
      confirmPassword: z
        .string()
        .min(6, "A senha deve ter ao menos 6 caracteres.")
        .max(30, "A senha pode ter no máximo 30 caracteres"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não são iguais.",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterForm>({ resolver: zodResolver(schemaRegister) });

  const submitRegister = async (data: RegisterForm) => {
    if (isOpen) {
      try {
        await axios
          .post("http://localhost:8800/users/register", data)
          .then((res) => {
            if (res.data.Status === "Success") {
              reset(initialPayload, { keepIsSubmitted: false });
              toast.success("Usuário registrado com sucesso!");
            } else {
              toast.error("Houve um erro ao registrar o usuário...");
            }
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
        <label>First Name</label>
        <input
          type="text"
          placeholder="First name"
          {...register("first_name")}
        />
        {errors.first_name && <span>{errors.first_name.message}</span>}
      </S.InputContainer>
      <S.InputContainer>
        <label>Last Name</label>
        <input type="text" placeholder="Last name" {...register("last_name")} />
        {errors.last_name && <span>{errors.last_name.message}</span>}
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
      <S.InputContainer>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </S.InputContainer>
      <Button title="Register" onClick={handleSubmit(submitRegister)} dark />
    </S.Form>
  );
};

export default Register;
