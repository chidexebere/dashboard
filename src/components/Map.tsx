import { productObject } from '../utils/types';

interface Props {
  product: productObject;
}

const Map = ({ product }: Props) => {
  const { company } = product;
  const { address } = company;
  return (
    <div className="">
      <p className="text-base font-light leading-relaxed mt-0 mb-0 text-gray-800">
        {address.house} {address.street}
      </p>
      <h3 className="text-base font-light leading-relaxed mt-0 mb-0 text-gray-800">
        {address.city.name} {address.country.name}
      </h3>
    </div>
  );
};

export default Map;
