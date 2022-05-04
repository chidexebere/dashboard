// change the APP_ID for different configurations
const APP_ID = 2;
const PRODUCT_ID = 6781;

const config: string = process.env.REACT_APP_CONFIG_URL as string;
const product: string = process.env.REACT_APP_PRODUCT_URL as string;
const trl: string = process.env.REACT_APP_TRL as string;

const fetchData = async (endpoint: string) => {
  const fetchRequest = fetch(endpoint);
  const response = await fetchRequest;

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  return jsonResponse;
};

const postData = async (endpoint: string, requestBody: string) => {
  const postRequest = fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  const response = await postRequest;

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  return jsonResponse;
};

const editData = async (endpoint: string, requestBody: ListObject) => {
  const postRequest = fetch(endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });
  const response = await postRequest;

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  return jsonResponse;
};

// Get APP configuration
const getAppConfig = async () => {
  return await fetchData(`${config}/${APP_ID}/`);
};

// Get Product
const getProduct = async () => {
  return await fetchData(`${product}/${PRODUCT_ID}/`);
};

// Get TRL
const getTrl = async () => {
  return await fetchData(trl);
};

// Add list
const addList = async (name: string) => {
  return await postData(`${product}/${PRODUCT_ID}/`, name);
};

// Add list
const editList = async (list: ListObject) => {
  return await editData(`${product}/${PRODUCT_ID}/`, list);
};

export { postData, getAppConfig, getProduct, getTrl, addList, editList };
