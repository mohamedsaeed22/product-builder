import { v4 as uuid } from "uuid";
import { IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Product 1",
    description:
      "This is the description of product 1This is the description of product 1This is the description of product 1This is the description of product 1This is the description of product 1This is the description of product 1This is the description of product 1This is the description of product 1",
    imageURL:
      "https://images.unsplash.com/photo-1720582760044-c4d220f09305?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "142214",
    colors: ["#000000", "#254135", "#ccc"],
    category: {
      name: "cars",
      imageURL:
        "https://images.unsplash.com/photo-1718862403436-616232ec6005?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Product 2",
    description:
      "This is the description of product 2 This is the description of product 2 This is the description of product 2 This is the description of product 2This is the description of product 2",
    imageURL:
      "https://images.unsplash.com/photo-1720247522784-ba24b938534d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "231400",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    category: {
      name: "bikes",
      imageURL:
        "https://images.unsplash.com/photo-1718506921663-ee4571a3f92e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Product 3",
    description:
      "This is the description of product 3This is the description of product 3This is the description of product 3This is the description of product 3This is the description of product 3This is the description of product 3",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1681051346868-f25a92bbb0d0?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "358900",
    colors: ["#111111", "#222222", "#333333"],
    category: {
      name: "boats",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1719930222062-5e63c50077cc?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Product 4",
    description:
      "This is the description of product 4This is the description of product 4This is the description of product 4This is the description of product 4",
    imageURL:
      "https://images.unsplash.com/photo-1720329461017-d6ed9f66beb5?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "284900",
    colors: ["#444444", "#555555", "#666666"],
    category: {
      name: "planes",
      imageURL:
        "https://images.unsplash.com/photo-1718976142386-e9ebe34d3aee?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Product 5",
    description:
      "This is the description of product 5This is the description of product 5This is the description of product 5This is the description of product 5This is the description of product 5",
    imageURL:
      "https://images.unsplash.com/photo-1714852575817-79e1e6ef27e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "529900",
    colors: ["#777777", "#888888", "#999999"],
    category: {
      name: "trains",
      imageURL:
        "https://images.unsplash.com/photo-1718506921663-ee4571a3f92e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];

export const formInputsList:IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "product title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "product description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "product image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "product price",
    type: "number",
  },
];
