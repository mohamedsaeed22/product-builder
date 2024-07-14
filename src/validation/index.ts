export const productValidation = (product: {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}) => {
  const errors: {
    title: string;
    description: string;
    imageURL: string;
    price: string;
  } = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Title must be between 10 and 80 characters long";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 80
  ) {
    errors.description =
      "Description must be between 10 and 80 characters long";
  }
  if (!product.imageURL.trim() || !validUrl) {
    errors.imageURL = "Image URL must be a valid URL";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Price must be a valid number";
  }
  return errors;
};
