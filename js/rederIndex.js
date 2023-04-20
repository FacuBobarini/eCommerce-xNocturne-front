async function renderProductList() {
  cart();
  setCart();
  const productList = await products.getProducts();
  productList.forEach((product) => {
    if (product.id > 4) return;
    renderProduct(product);
  });
}

renderProductList();
