import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export const Box = styled.div`
  margin-top: ${(p) => p.theme.space[4]}px;
  border-radius: ${(p) => p.theme.radii.normal};
  border: ${(p) => p.theme.borders.normal};
  color: ${(p) => p.theme.colors.terraCotta};
  padding: ${(p) => p.theme.space[4]}px;
  display: grid;
  gap: ${(p) => p.theme.space[3]}px;
`;

export const ShopWrapper = styled.div`
  padding: ${(p) => p.theme.space[3]}px;
  border-radius: ${(p) => p.theme.radii.normal};
  border: ${(p) => p.theme.borders.normal};
  color: ${(p) => p.theme.colors.padua};
  width: 150px;
`;

export const ItemWrapper = styled.div`
  padding: ${(p) => p.theme.space[3]}px;
  border-radius: ${(p) => p.theme.radii.normal};
  border: ${(p) => p.theme.borders.normal};
  color: ${(p) => p.theme.colors.padua};
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
`;

export const Button = styled.button`
  width: 120px;
  margin: 0 auto;
  padding: ${(p) => p.theme.space[3]}px;
  cursor: pointer;
  font-size: ${(p) => p.theme.fontSizes.xs};
  border-radius: ${(p) => p.theme.radii.normal};
  border: ${(p) => p.theme.borders.none};
  background-color: ${(p) => p.theme.colors.bayOfMany};
  color: ${(p) => p.theme.colors.rice};
  transition: all 0.25s;

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.terraCotta};
  }
`;

export const Name = styled.h3`
  justify-content: center;
  align-content: center;
  display: flex;
`;
