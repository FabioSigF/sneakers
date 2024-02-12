import * as S from "./styles";
import CardProduct from "../CardProduct";
import { SectionTitle } from "../../globalStyle";

type Props = {
  title?: String;
  list: Product[];
};

interface Product {
  model: string;
  brand: string;
  price: number;
  p_type: string;
  gender: string;
  id: number;
  promotion: any;
  category: string;
}

export const Products = ({ title, list }: Props) => {
  return (
    <S.Wrapper>
        {title && <SectionTitle textCenter>{title}</SectionTitle>}
        <S.List>
          {list &&
            list.map((item, key) => <CardProduct key={key} id={item.id} />)}
        </S.List>
    </S.Wrapper>
  );
};
