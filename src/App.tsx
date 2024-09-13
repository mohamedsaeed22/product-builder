import { ChangeEvent, FormEvent, useState } from "react";
import ProductCart from "./components/ProductCart";
import { categories, colors, formInputsList, productList } from "./data";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./ui/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./ui/Select";
import { ProductName } from "./types";

const defaultProduct = {
  title: "",
  description: "",
  imageURL: "",
  price: "",
  colors: [],
  category: { name: "", imageURL: "" },
};
function App() {
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProduct);
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [tempcolors, setTempcolors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModalEdit() {
    setIsOpenEdit(false);
  }
  function openModalEdit() {
    setIsOpenEdit(true);
  }

  const onCancel = () => {
    setProduct(defaultProduct);
    closeModal();
  };
  const removeHandler = (id: string) => {
    setProducts(products.filter((p) => p.id !== id));
  };
  const onChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProductToEdit((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, price, imageURL } = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    const hasErrorMsg =
      Object.values(errors).some((val) => val === "") &&
      Object.values(errors).every((val) => val === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempcolors,
        category: selectedCategory,
      },
      ...prev,
    ]);
    setProduct(defaultProduct);
    setTempcolors([]);
    setIsOpen(false);
  };
  const submitEditHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description, price, imageURL } = productToEdit;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    const hasErrorMsg =
      Object.values(errors).some((val) => val === "") &&
      Object.values(errors).every((val) => val === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempcolors,
        category: selectedCategory,
      },
      ...prev,
    ]);

    const updatedProducts = [...products];
    updatedProducts[productToEditIndex] = {
      ...productToEdit,
      colors: tempcolors.concat(productToEdit.colors),
    };
    setProducts(updatedProducts);

    setProductToEdit(defaultProduct);
    setTempcolors([]);
    setIsOpenEdit(false);
  };
  // ============ renders ==================
  const renderProductList = products.map((product, index) => (
    <ProductCart
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openModalEdit={openModalEdit}
      indx={index}
      setProductToEditIndex={setProductToEditIndex}
      removeHandler={removeHandler}
    />
  ));

  const renderFormInputList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col">
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        type={input.type}
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangehandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductColor = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempcolors.includes(color)) {
          setTempcolors((prev) => prev.filter((col) => col !== color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempcolors((prev) => prev.filter((col) => col !== color));
          return;
        }
        setTempcolors((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: ProductName
  ) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="mb-[2px] text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };

  return (
    <main className="container">
      <div className="w-40 m-auto mt-4">
        <Button className="bg-indigo-700" onClick={openModal}>
          Add Product
        </Button>
      </div>
      <div className=" border-2 m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>

      {/* add product model */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="add new product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}

          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex items-center my-4 space-x-1 flex-wrap">
            {tempcolors.map((col) => (
              <span
                key={col}
                className="p-1 mr-1 text-xs rounded-md text-white"
                style={{ backgroundColor: col }}
              >
                {col}
              </span>
            ))}
          </div>
          <div className="flex items-center my-4 space-x-1 flex-wrap">
            {renderProductColor}
          </div>
          <div className="flex items-center space-x-3 ">
            <Button className="bg-gray-400" type="submit">
              Submit
            </Button>
            <Button className="bg-indigo-700" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* edit product model */}
      <Modal
        isOpen={isOpenEdit}
        closeModal={closeModalEdit}
        title="Edit current product"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "ProductTitle", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "ProductDescriptions",
            "description"
          )}
          {renderProductEditWithErrorMsg(
            "imageURL",
            "ProductImageURL",
            "imageURL"
          )}
          {renderProductEditWithErrorMsg("price", "ProductPrice", "price")}
          <Select
            selected={productToEdit.category}
            setSelected={(val) =>
              setProductToEdit({ ...productToEdit, category: val })
            }
          />
          <div className="flex items-center my-4 space-x-1 flex-wrap">
            {renderProductColor}
          </div>
          <div className="flex items-center my-4 space-x-1 flex-wrap">
            {tempcolors.concat(productToEdit.colors).map((col) => (
              <span
                key={col}
                className="p-1 mr-1 text-xs rounded-md text-white"
                style={{ backgroundColor: col }}
              >
                {col}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-3 ">
            <Button className="bg-gray-400" type="submit">
              Submit
            </Button>
            <Button
              className="bg-indigo-700"
              onClick={() => setIsOpenEdit(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
