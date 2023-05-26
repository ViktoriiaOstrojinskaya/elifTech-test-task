import { Outlet } from "react-router-dom";
import { StyledLink, BoxNav, Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <BoxNav>
        <StyledLink to="/shop">Shop</StyledLink>
        <StyledLink to="/shoppingCart">ShoppingCart</StyledLink>
        <StyledLink to="/history">History</StyledLink>
        <StyledLink to="/coupons">Coupons</StyledLink>
      </BoxNav>

      <Outlet />
    </Container>
  );
};
