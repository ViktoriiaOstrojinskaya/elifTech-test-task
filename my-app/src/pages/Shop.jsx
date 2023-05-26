import { ShopList } from "../components/ShopList";
import { getListShops, getListItems } from "../fakeDB";

export const Shop = () => {
  const shops = getListShops();
  const items = getListItems();
  return (
    <>
      <ShopList shops={shops} items={items} />
    </>
  );
};
