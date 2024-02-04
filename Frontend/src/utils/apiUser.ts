export async function updateCurrentUserCart(productId: string) {
  try {
    const sessionJWTToken = sessionStorage.getItem("jwt");
    if (!sessionJWTToken) throw new Error("No user found , Please log in!");

    const bodyContent = { productId };

    console.log(bodyContent);

    const response = await fetch(
      "http://127.0.0.1:3000/api/users/update-cart",
      {
        method: "PATCH",
        body: JSON.stringify(bodyContent),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionJWTToken}`,
        },
      }
    );

    const updatedUser = await response.json();

    if (!updatedUser) throw new Error(`Couldn't update user data`);

    return updatedUser;
  } catch (err) {
    console.log(err);
  }
}

export const deleteProduct = async (productId: string) => {
  try {
    const sessionJWTToken = sessionStorage.getItem("jwt");

    if (!sessionJWTToken) throw new Error("No user found , Please log in!");

    const bodyContent = { productId };

    const response = await fetch(
      "http://127.0.0.1:3000/api/users/delete-cart",
      {
        method: "DELETE",
        body: JSON.stringify(bodyContent),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionJWTToken}`,
        },
      }
    );

    const updatedUser = await response.json();

    if (!updatedUser) throw new Error(`Couldn't delete user.`);

    return updatedUser;
  } catch (err) {
    console.error(`Couldn't delete item. Please try again`);
  }
};
