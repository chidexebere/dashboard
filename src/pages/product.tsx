import { useQuery } from 'react-query';
import { getProduct } from '../api';
import Layout from '../layout';
import { configObject, productObject } from '../utils/types';

interface Props {
  configData: configObject;
}

const Product = ({ configData }: Props) => {
  const { hasUserSection } = configData;
  const { isLoading, isError, data } = useQuery<productObject>(
    'product',
    getProduct,
  );

  // console.log(error);

  if (isError) {
    return <div>Something went wrong, check app configuration</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Layout configData={configData}>
      <h1>Product</h1>
    </Layout>
  );
};

export default Product;
