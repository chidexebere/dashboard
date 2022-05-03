import { productObject } from '../utils/types';
import Card from './Card';

interface Props {
  product: productObject;
}

const ProductInfo = ({ product }: Props) => {
  const { picture, name, type } = product;
  return (
    <section className="flex flex-col gap-y-2">
      <Card>
        <div className="flex justify-center">
          <img src={picture} alt="product picture" width="300" height="300" />
        </div>
      </Card>
      <Card>
        <h5 className="text-gray-900 text-xl leading-tight font-medium text-center">
          {name} &nbsp;
          <span className="text-base">{type.name}</span>
        </h5>
      </Card>
    </section>
  );
};

export default ProductInfo;
