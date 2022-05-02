import { productObject } from '../utils/types';
import Tab from './Tab';
import Tabs from './Tabs';

interface Props {
  product: productObject;
}

const ProductDescription = ({ product }: Props) => {
  const { description, categories, businessModels, trl } = product;
  return (
    <div className="">
      <Tabs>
        <Tab className="Description">
          <p
            className=""
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </Tab>
        <Tab className="Attributes">
          <>
            {categories.map((category) => (
              <div key={category.id}>
                <p>{category.name}</p>
              </div>
            ))}

            {businessModels.map((model) => (
              <div key={model.id}>
                <p>{model.name}</p>
              </div>
            ))}

            <p>{trl.name}</p>
          </>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductDescription;
