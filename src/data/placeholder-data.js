import { getUser } from "../state/userState.js";

const user = getUser();

const tire = {
  img: "/src/assets/img/product_tire.png",
  discription:
    "O pneu RoadX RXMOTION H12 oferece segurança e performance em qualquer condição climática, seja no seco ou no molhado.",
  price: 239.5,
  discount: 10,
  name: "185/65R15 88H",
  subTitle: "RXMOTION H12",
  category: "Pneus",
};

const shockAbsorber = {
  img: "/src/assets/img/product_shock_absorber.png",
  price: 244.5,
  discount: 20,
  name: "Amortecedor",
  subTitle: "Modelo Original",
  category: "Amortecedor",
};

const products = [];

for (var i = 0; i < 10; i++) {
  products.push(shockAbsorber);
  products.push(tire);
}

export { products, user };
