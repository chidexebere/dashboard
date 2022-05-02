import { productObject } from '../utils/types';

interface Props {
  product: productObject;
}

const ProductInfo = ({ product }: Props) => {
  const { picture, name, type } = product;
  return (
    <div className="">
      <div className="flex justify-center">
        <img src={picture} alt="product picture" width="300" height="300" />
      </div>
      <h5>{name}</h5>
      <p>{type.name}</p>
    </div>
  );
};

export default ProductInfo;
