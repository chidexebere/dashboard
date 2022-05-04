import { useQuery } from 'react-query';
import cx from 'classnames';
import { getProduct, getTrl } from '../api';
import Map from '../components/Map';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import UserInfo from '../components/UserInfo';
import Layout from '../layout';
import Loading from './loading';

interface Props {
  configData: ConfigObject;
}

const Product = ({ configData }: Props) => {
  const { hasUserSection } = configData;
  const { isLoading, isError, data } = useQuery<ProductObject>(
    'product',
    getProduct,
  );

  const { data: trl } = useQuery<TrlObject[]>('trl', getTrl);

  if (isError) {
    return (
      <Layout>
        <div className="flex items-center justify-center">
          <h4 className="mt-20 text-xl font-bold text-center text-gray-800 md:text-2xl">
            <span className="text-red-500">Oops!</span> Something went wrong,
            check product url
          </h4>
        </div>
      </Layout>
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  return (
    <Layout>
      {data && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div
            className={cx(hasUserSection ? 'lg:col-span-2' : 'lg:col-span-3')}
          >
            <ProductInfo product={data} />
          </div>
          <div className={cx(hasUserSection ? '' : 'hidden')}>
            <UserInfo product={data} />
          </div>
          <div className="lg:col-span-2 ...">
            <ProductDescription product={data} trlList={trl} />
          </div>
          <div className="...">
            <Map product={data} />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Product;
