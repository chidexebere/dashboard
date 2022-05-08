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

const editData = async (endpoint: string, requestBody: ListObject | string) => {
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

export { fetchData, postData, editData };
