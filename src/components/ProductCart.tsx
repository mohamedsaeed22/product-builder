import { IProduct } from "../interfaces";
import Button from "../ui/Button";
import { textSlicer } from "../utils/functions";
import Image from "./Image";

interface IProps {
  product: IProduct;
}

const ProductCart = ({ product }: IProps) => {
  const { title, description, imageURL, price, category } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image imageURl={imageURL} alt={title} className="rounded-md mb-2 h-52" />
      <h3>{title}</h3>
      <p>{textSlicer(description)}</p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>
      <div className="flex justify-between items-center">
        <span>${price}</span>
        <Image
          imageURl={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-center"
        />
      </div>
      <div className="flex justify-between items-center space-x-2 mt-5">
        <Button
          className="bg-indigo-700"
          width="w-full"
          onClick={() => alert("dddd")}
        >
          Edit
        </Button>
        <Button className="bg-red-700" width="w-full">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCart;
