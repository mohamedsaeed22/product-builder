import { ChangeEvent, FormEvent, useState } from "react";
import ProductCart from "./components/ProductCart";
import { formInputsList, productList } from "./data";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { IProduct } from "./interfaces";
const defaultProduct = {
  title: "",
  description: "",
  imageURL: "",
  price: "",
  colors: [],
  category: { name: "", imageURL: "" },
};
function App() {
  const [product, setProduct] = useState<IProduct>(defaultProduct);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const onCancel = () => {
    setProduct(defaultProduct);
    closeModal();
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(product);
    setIsOpen(false);
  };
  const onChangehandler = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  // ============ renders ==================
  const renderProductList = productList.map((product) => (
    <ProductCart key={product.id} product={product} />
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
    </div>
  ));
  return (
    <main className="container">
      <Button className="bg-indigo-700" onClick={openModal}>
        Add
      </Button>
      <div className=" border-2 m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="add new product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex items-center space-x-3 ">
            <Button className="bg-gray-400" type="submit">Submit</Button>
            <Button className="bg-indigo-700" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
