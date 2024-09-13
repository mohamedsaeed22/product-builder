import { IProduct } from "../interfaces";
import Button from "../ui/Button";
import { textSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openModalEdit: () => void;
  setProductToEditIndex: (val: number) => void;
  indx: number;
  removeHandler: (id: string) => void;
}

const ProductCart = ({
  product,
  setProductToEdit,
  openModalEdit,
  setProductToEditIndex,
  indx,
  removeHandler,
}: IProps) => {
  const { title, description, imageURL, price, category, colors } = product;
  const renderProductColor = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));
  const onEdit = () => {
    setProductToEdit(product);
    openModalEdit();
    setProductToEditIndex(indx);
  };

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image imageURl={imageURL} alt={title} className="rounded-md mb-2 h-52" />
      <h3>{title}</h3>
      <p>{textSlicer(description)}</p>

      <div className="flex items-center my-4 space-x-1 flex-wrap">
        {renderProductColor}
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
          onClick={() => onEdit()}
        >
          Edit
        </Button>
        <Button
          className="bg-red-700"
          width="w-full"
          onClick={() => {
            removeHandler(product.id!);
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ProductCart;
