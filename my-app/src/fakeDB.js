const shops = [
  { id: "s-1", name: "Shop 1" },
  { id: "s-2", name: "Shop 2" },
  { id: "s-3", name: "Shop 3" },
  { id: "s-4", name: "Shop 4" },
  { id: "s-5", name: "Shop 5" },
];

const items = [
  { id: "item-1", name: "Item 1" },
  { id: "item-2", name: "Item 2" },
  { id: "item-3", name: "Item 3" },
  { id: "item-4", name: "Item 4" },
  { id: "item-5", name: "Item 5" },
];

export const getListShops = () => {
  return shops;
};

export const getListItems = () => {
  return items;
};

export const getShopId = (shopId) => {
  return shops.find((shop) => shop.id === shopId);
};

export const getItemId = (itemId) => {
  return items.find((item) => item.id === itemId);
};
