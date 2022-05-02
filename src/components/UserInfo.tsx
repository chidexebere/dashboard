import { productObject } from '../utils/types';

interface Props {
  product: productObject;
}

const UserInfo = ({ product }: Props) => {
  const { user, company } = product;
  return (
    <div className="">
      <div className="flex justify-center">
        <img
          src={user.profilePicture}
          alt="user profile picture"
          width="200"
          height="200"
        />
      </div>
      <h5>
        {user.firstName} {user.lastName}
      </h5>
      <p>{company.name}</p>
    </div>
  );
};

export default UserInfo;
