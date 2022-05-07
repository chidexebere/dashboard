import { useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { RootState } from '../appState/store';
import Card from './Card';

interface Props {
  product: ProductObject;
}

const ProductInfo = ({ product }: Props) => {
  const { picture, name, type } = product;

  const { ON } = useSelector((state: RootState) => state.app);
  const APP_ID = ON === true ? 1 : 2;
  const queryClient = useQueryClient();
  const appConfigData = queryClient.getQueryData<ConfigObject>([
    'appConfig',
    APP_ID,
  ]);

  return (
    <section className="flex flex-col gap-y-2">
      <Card>
        <div className="flex justify-center">
          <img
            src={picture}
            alt="product picture"
            loading="lazy"
            width="300"
            height="300"
          />
        </div>
      </Card>
      <Card>
        <h5
          className="text-xl leading-tight font-medium text-center"
          style={{
            color: appConfigData?.mainColor,
          }}
        >
          {name} &nbsp;
          <span className="text-base">{type.name}</span>
        </h5>
      </Card>
    </section>
  );
};

export default ProductInfo;
