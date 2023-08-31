import React, { useState, useCallback } from "react";
import Modal from "..";
import * as S from "./styles";
import axios from "axios";
import { useAppSelector } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { AuthenticationModalSlice } from "../../../redux/modal/authentication/slice";

type Props = {};

interface LoginState {
  email: string;
  password: string;
}

interface RegisterState {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

const AuthenticationModal = (props: Props) => {
  const [registerModalActive, setRegisterModalActive] = useState(false);

  const { isOpen } = useAppSelector(
    (state) => state.modalAuthenticationReducer
  );

  axios.defaults.withCredentials = true;

  //Form states
  const [loginValues, setLoginValues] = useState<LoginState>({
    email: "",
    password: "",
  });
  const [registerValues, setRegisterValues] = useState<RegisterState>({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    //Se é um formulário de registro
    if (registerModalActive) {
      try {
        await axios
          .post("http://localhost:8800/users/register", registerValues)
          .then((res) => console.log(res));
        setRegisterValues({
          email: "",
          first_name: "",
          last_name: "",
          password: "",
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      //Se é um formulário de login
      try {
        await axios
          .post("http://localhost:8800/users/login", loginValues)
          .then((res) => console.log(res));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const toggle = useCallback(() => {
    dispatch(AuthenticationModalSlice.actions.onToggle({}));
  }, [dispatch]);
  //Layout Login and Register
  const headerContent = (
    <S.HeaderWrapper>
      <S.Switch>
        <S.SwitchButton className={`${registerModalActive && "register"}`} />
        <S.SwitchOptions>
          <div onClick={() => setRegisterModalActive(false)}>Login</div>
          <div onClick={() => setRegisterModalActive(true)}>Register</div>
        </S.SwitchOptions>
      </S.Switch>
      <S.HeaderLabel>
        {registerModalActive
          ? "Create your account"
          : "Insert your account information"}
      </S.HeaderLabel>
    </S.HeaderWrapper>
  );

  let bodyContent;

  if (registerModalActive) {
    bodyContent = (
      <S.Form>
        <S.InputContainer>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Email"
            value={registerValues.email}
            onChange={(e) =>
              setRegisterValues({ ...registerValues, email: e.target.value })
            }
          />
        </S.InputContainer>
        <S.InputContainer>
          <label>First Name</label>
          <input
            type="text"
            placeholder="First name"
            value={registerValues.first_name}
            onChange={(e) =>
              setRegisterValues({
                ...registerValues,
                first_name: e.target.value,
              })
            }
          />
        </S.InputContainer>
        <S.InputContainer>
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Last name"
            value={registerValues.last_name}
            onChange={(e) =>
              setRegisterValues({
                ...registerValues,
                last_name: e.target.value,
              })
            }
          />
        </S.InputContainer>
        <S.InputContainer>
          <label>Password</label>
          <input
            type="text"
            placeholder="Password"
            value={registerValues.password}
            onChange={(e) =>
              setRegisterValues({ ...registerValues, password: e.target.value })
            }
          />
        </S.InputContainer>
      </S.Form>
    );
  } else {
    bodyContent = (
      <S.Form>
        <S.InputContainer>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Email"
            value={loginValues.email}
            onChange={(e) =>
              setLoginValues({ ...loginValues, email: e.target.value })
            }
          />
        </S.InputContainer>
        <S.InputContainer>
          <label>Password</label>
          <input
            type="text"
            placeholder="Password"
            value={loginValues.password}
            onChange={(e) =>
              setLoginValues({ ...loginValues, password: e.target.value })
            }
          />
        </S.InputContainer>
      </S.Form>
    );
  }

  return (
    <Modal
      header={headerContent}
      body={bodyContent}
      footerActionLabel={registerModalActive ? "Register" : "Login"}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={toggle}
    />
  );
};

export default AuthenticationModal;
