import React from "react";
import * as S from "./styles";
import Container from "../../Container";
type Props = {};

const Copyright = (props: Props) => {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          Copyright &copy;2023 Fábio Signorini. All rights reserved.
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};

export default Copyright;
