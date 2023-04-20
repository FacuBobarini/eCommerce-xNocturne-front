async function renderCatalogue() {
  cart();
  setCart();
  const productList = await products.getProducts();
  productList.forEach((product) => {
    renderProduct(product);
  });
}

renderCatalogue();
