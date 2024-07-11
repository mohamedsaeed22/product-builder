import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      className="border-gray-300 border-[1px] shadow-md focus:border-indigo-500
       focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-3 py-3 tex-md"
      {...rest}
    />
  );
};

export default Input;
