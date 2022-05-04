import { ProductObject } from '../utils/types';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import Card from './Card';

interface Props {
  product: ProductObject;
}

const Map = ({ product }: Props) => {
  const { company } = product;
  const { address } = company;
  return (
    <Card>
      <div className="mt-4 flex flex-col justify-center items-center text-gray-500">
        <LocationMarkerIcon className="h-6 w-6" />
        <p>
          {address.house} {address.street}
        </p>
        <p>
          {address.city.name} {address.country.name}
        </p>
      </div>
    </Card>
  );
};

export default Map;
