import Dropdown from '../Dropdown';
import { ListGroup } from '../List';
import Tab from '../Tab';
import Tabs from '../Tabs';
import RichTextEditor from '../TextEditor/RichTextEditor';

interface Props {
  product: ProductObject;
  trlList?: TrlObject[];
}

const ProductDescription = ({ product, trlList }: Props) => {
  const { description, categories, businessModels, trl } = product;
  return (
    <Tabs>
      <Tab className="Description">
        <RichTextEditor contentFromAPI={description} />
      </Tab>
      <Tab className="Attributes">
        <div className="p-2 bg-white normal-case">
          <ListGroup title="Categories" lists={categories} />
          <hr />
          <ListGroup title="Business Models" lists={businessModels} />
          <hr />
          {trlList && (
            <div className="my-2 flex flex-col">
              <h2 className="text-left font-semibold text-slate-900 mb-4">
                TRL
              </h2>
              <Dropdown value={trl.name} options={trlList} />
            </div>
          )}
        </div>
      </Tab>
    </Tabs>
  );
};

export default ProductDescription;
