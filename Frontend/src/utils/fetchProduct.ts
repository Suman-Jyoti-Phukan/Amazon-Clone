export const fetchProduct = async (productId: string) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:3000/api/products/${productId}`
    );

    if (!response.status) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();

    const products = data.data.products;

    return products;
  } catch (error) {
    console.error("Error fetching product:", error);

    throw error;
  }
};

export const fetchAllProductCustom = async (endPoint: string) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:3000/api/products/${endPoint}`
    );

    if (!response.status) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();

    return data.productsData.products;
  } catch (error) {
    console.error("Error fetching product:", error);

    throw error;
  }
};
