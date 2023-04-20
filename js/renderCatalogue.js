async function renderCatalogue() {
  setCart();
  const productList = await products.getProducts();
  productList.forEach((product) => {
    renderProduct(product);
  });
}

renderCatalogue();
