//React Hooks
import { useState, useCallback } from "react";

//Axios
import axios from "axios";

//Styles
import * as S from "./styles";

//Redux Hooks
import { useAppDispatch, useAppSelector } from "../../../redux/store";
//Redux Actions
import { onToggle } from "../../../redux/modal/authentication/slice";

//Components
import Modal from "..";

import Register from "./Register";
import Login from "./Login";

type Props = {};

const AuthenticationModal = (props: Props) => {
  //Modal Page States - if registerModalActive, form will be about register. Else, login.
  const [registerModalActive, setRegisterModalActive] = useState(false);
  
  //Redux states
  const { isOpen } = useAppSelector((state: any) => state.modalAuthentication);

  //Redux Dispatch
  const dispatch = useAppDispatch();

  //Modal is open or not
  const toggle = useCallback(() => {
    dispatch(onToggle({}));
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

  //Se é formulário de registro...
  if (registerModalActive) {
    bodyContent = <Register isOpen={registerModalActive} />;
  } else {
    //Se é formulário de login...
    bodyContent = <Login isOpen={!registerModalActive}/>;
  }

  return (
    <Modal
      header={headerContent}
      body={bodyContent}
      isOpen={isOpen}
      onClose={toggle}
    />
  );
};

export default AuthenticationModal;
