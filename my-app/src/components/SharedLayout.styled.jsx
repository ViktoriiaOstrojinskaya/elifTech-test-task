import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const BoxNav = styled.nav`
  display: flex;
`;

export const StyledLink = styled(NavLink)`
  padding: ${(p) => p.theme.space[3]}px;
  margin-right: ${(p) => p.theme.space[3]}px;
  font-size: ${(p) => p.theme.fontSizes.xs};
  border-radius: ${(p) => p.theme.radii.normal};
  border: ${(p) => p.theme.borders.none};
  background-color: ${(p) => p.theme.colors.bayOfMany};
  color: ${(p) => p.theme.colors.rice};
  text-decoration: none;

  &.active {
    background-color: ${(p) => p.theme.colors.padua};
    color: ${(p) => p.theme.colors.rice};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
