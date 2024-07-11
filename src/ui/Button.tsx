import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ className, children, width="w-fit", ...rest }: IProps) => {
  return (
    <button
      className={`p-2 w-full rounded-lg text-white ${className} ${width}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
