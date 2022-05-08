import { useMutation, useQuery, useQueryClient } from 'react-query';
import { editData, fetchData, postData } from '.';

const PRODUCT_ID = 6781;

const config: string = process.env.REACT_APP_CONFIG_URL as string;
const product: string = process.env.REACT_APP_PRODUCT_URL as string;
const trl: string = process.env.REACT_APP_TRL as string;

// Get APP configuration
const useAppConfig = (APPID: number) => {
  return useQuery<ConfigObject>(['appConfig', APPID], () =>
    fetchData(`${config}/${APPID}/`),
  );
};

// Get Product
const useProduct = () => {
  return useQuery<ProductObject>(['product'], () =>
    fetchData(`${product}/${PRODUCT_ID}/`),
  );
};

// Get TRL
const useTrl = () => {
  return useQuery<TrlObject[]>(['trl'], () => fetchData(trl));
};

// Add Product
const useAddProduct = () => {
  return useMutation((name: string) =>
    postData(`${product}/${PRODUCT_ID}/`, name),
  );
};

// Edit Product
const useEditProduct = () => {
  return useMutation((list: ListObject | string) =>
    editData(`${product}/${PRODUCT_ID}/`, list),
  );
};

// Use cached app configuration data

const useCachedAppConfig = (APPID: number) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<ConfigObject>(['appConfig', APPID]);
};

export {
  useAppConfig,
  useProduct,
  useTrl,
  useAddProduct,
  useEditProduct,
  useCachedAppConfig,
};
