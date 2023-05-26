import {
  Container,
  ShopWrapper,
  ItemWrapper,
  Name,
  Box,
  Button,
} from "./ShopList.styled";

export const ShopList = ({ shops, items }) => {
  return (
    <Container>
      <Box>
        {shops.map((shop) => (
          <ShopWrapper key={shop.id}>
            <Name>{shop.name}</Name>
          </ShopWrapper>
        ))}
      </Box>
      <Box>
        {items.map((item) => (
          <ItemWrapper key={item.id}>
            <Name>{item.name}</Name>
            <Button type="button">Add to Cart</Button>
          </ItemWrapper>
        ))}
      </Box>
    </Container>
  );
};
