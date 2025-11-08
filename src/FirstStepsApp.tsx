import ItemCounter from "./shoping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const cartItems: ItemInCart[] = [
  { productName: "PS5", quantity: 1 },
  { productName: "GOW", quantity: 1 },
  { productName: "DualShock", quantity: 2 },
];

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>

      {cartItems.map(({ productName, quantity }) => (
        <ItemCounter name={productName} quantity={quantity} key={productName} />
      ))}
    </>
  );
}
