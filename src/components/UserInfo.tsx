import { ProductObject } from '../utils/types';
import Card from './Card';

interface Props {
  product: ProductObject;
}

const UserInfo = ({ product }: Props) => {
  const { user, company } = product;
  return (
    <Card>
      <div className="flex flex-col justify-center items-center h-full">
        <img
          className="rounded-full w-32 mb-4 mx-auto"
          src={user.profilePicture}
          alt="user profile picture"
          width="200"
          height="200"
        />

        <h5 className="text-xl font-medium leading-tight mb-2">
          {user.firstName} {user.lastName}
        </h5>
        <p className="text-gray-500">{company.name}</p>
      </div>
    </Card>
  );
};

export default UserInfo;
