export const getCatalog = async (payload) => {
    const {filter} = payload;
    const response = await fetch();
    const json = await response.json();
    return json;
  };