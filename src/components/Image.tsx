interface IProps {
  imageURl: string;
  alt: string;
  className: string;
}

const Image = ({ imageURl, alt, className }: IProps) => {
  return <img className={className} src={imageURl} alt={alt} />;
};

export default Image;
