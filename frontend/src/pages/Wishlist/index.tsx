//Styles
import * as S from "./styles";

//Redux Hooks
import { useAppSelector } from "../../redux/store";
//Redux Selectors
import { selectProductsCount } from "../../redux/wishList/selectors";
//Interface
import { Product } from "../../redux/wishList/slice";

//Components
import { PageContainer, PageTitleContainer } from "../../globalStyle";
import Container from "../../components/Container";
import CardProduct from "../../components/CardProduct";
import { List } from "../../components/Products/styles";
import { BreadCrumb, BreadCrumbList } from "../Product/styles";

type Props = {};

const Wishlist = (props: Props) => {
  const { products } = useAppSelector((state) => state.wishList);
  const productsCounter: number = useAppSelector(selectProductsCount);

  return (
    <PageContainer>
      <Container>
        <PageTitleContainer>
          <h2>WishList</h2>
          <BreadCrumb>
            <BreadCrumbList>
              <li>
                <a href={"/"}>Home</a>
              </li>
              /<li>Wishlist</li>
            </BreadCrumbList>
          </BreadCrumb>
        </PageTitleContainer>
        {productsCounter > 0 ? (
          <List>
            {products &&
              products.map((item: Product, key: number) => (
                <CardProduct
                  key={key}
                  id={item.id}
                />
              ))}
          </List>
        ) : (
          <S.TextListEmpty>
            Você não possui itens na lista de desejos...
          </S.TextListEmpty>
        )}
      </Container>
    </PageContainer>
  );
};

export default Wishlist;
