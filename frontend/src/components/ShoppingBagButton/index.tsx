//Styles
import * as S from "./styles";

//React Icons
import { IoBagHandleOutline } from "react-icons/io5";

//Redux Hooks
import { useAppSelector } from "../../redux/store";
import { selectProductsCount } from "../../redux/cart/selectors";

type Props = {};

const ShoppingBagButton = (props: Props) => {
  //Cart Selectors
  const productsQuantity: number = useAppSelector(selectProductsCount);
  return (
    <S.Wrapper>
      <IoBagHandleOutline size={22} />
      <S.Count>{productsQuantity}</S.Count>
    </S.Wrapper>
  );
};

export default ShoppingBagButton;
