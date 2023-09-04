import { styled } from "styled-components";
import { clr, fsize, transition } from "../../../globalStyle";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Switch = styled.label`
  background: ${clr.grayBg};
  border-radius: 3px;
  font-size: 12px;
  padding: 10px;
  min-width: 230px;
  position: relative;
`;

export const SwitchButton = styled.div`
  background-color: ${clr.bodyBg};
  width: calc(50% - 10px);
  height: 39px;
  border-radius: 3px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
  transition: ${transition.default};
  position: absolute;
  top: 7px;
  transform: translateX(0);

  &.register {
    transform: translateX(100%);
  }
`;

export const SwitchOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  font-weight: 700;
  position: relative;
  div {
    cursor: pointer;
    padding: 0.5rem;
  }
`;

export const HeaderLabel = styled.label`
  font-size: ${fsize.normalLarger};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 280px;
`;

export const InputContainer = styled.div`
  label {
    display: block;
    margin-bottom: .5rem;
  }
  span {
    font-size: ${fsize.small};
    color: ${clr.error};
  }
`;
