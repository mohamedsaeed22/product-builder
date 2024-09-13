import { v4 as uuid } from "uuid";
import { ICategory, IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "this is Product 1",
    description: "This is the description of product 1",
    imageURL:
      "https://images.unsplash.com/photo-1720582760044-c4d220f09305?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "142214",
    colors: ["#000", "#333", "#ccc", "#ff3333"],
    category: {
      name: "electrical",
      imageURL:
        "https://images.unsplash.com/photo-1558978806-73073843b15e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "this is Product 2",
    description: "This is the description of product 2",
    imageURL:
      "https://images.unsplash.com/photo-1720247522784-ba24b938534d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "231400",
    colors: ["#000", "#333", "#ff3333"],
    category: {
      name: "technology",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=1863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "this is Product 3",
    description: "This is the description of product 3",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1681051346868-f25a92bbb0d0?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "358900",
    colors: ["#000", "#ccc", "#ff3333"],
    category: {
      name: "electrical",
      imageURL:
        "https://images.unsplash.com/photo-1558978806-73073843b15e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "this is Product 4",
    description: "This is the description of product 4",
    imageURL:
      "https://images.unsplash.com/photo-1720329461017-d6ed9f66beb5?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "284900",
    colors: ["#ff3333"],

    category: {
      name: "technology",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=1863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "this is Product 5",
    description: "This is the description of product 5",
    imageURL:
      "https://images.unsplash.com/photo-1714852575817-79e1e6ef27e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "529900",
    colors: ["#000", "#333"],
    category: {
      name: "clothes",
      imageURL:
        "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];

export const formInputsList: IFormInput[] = [
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

export const colors: string[] = ["#ccc", "#333", "#000", "#ff3333"];
export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "clothes",
    imageURL:
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "electrical",
    imageURL:
      "https://images.unsplash.com/photo-1558978806-73073843b15e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: uuid(),
    name: "technology",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=1863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
