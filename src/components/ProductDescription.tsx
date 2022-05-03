import { productObject } from '../utils/types';
import Tab from './Tab';
import Tabs from './Tabs';
import RichTextEditor from './TextEditor/RichTextEditor';

interface Props {
  product: productObject;
}

const ProductDescription = ({ product }: Props) => {
  const { description, categories, businessModels, trl } = product;
  return (
    <div className="">
      <Tabs>
        <Tab className="Description">
          <div className="">
            <RichTextEditor contentFromAPI={description} />
          </div>
        </Tab>
        <Tab className="Attributes">
          <div className="">
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
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductDescription;
