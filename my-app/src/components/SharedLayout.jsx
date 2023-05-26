import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const SharedLayout = () => {
  return (
    <>
      <h1>
        <nav>
          <StyledLink to="/shop">Shop</StyledLink>
          <StyledLink to="/shoppingCart">ShoppingCart</StyledLink>
        </nav>
      </h1>
      <Outlet />
    </>
  );
};
