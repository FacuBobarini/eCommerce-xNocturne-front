function cart() {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
}

function setCart() {
  console.log("entro?");
  let badgeCart = domBadge;
  localStorage.setItem(
    "badgeCart",
    JSON.stringify(JSON.parse(localStorage.getItem("cart")).length)
  );
  const badge = JSON.parse(localStorage.getItem("badgeCart"));
  badgeCart.innerHTML = `${badge > 0 ? badge : ""}`;
}

function cleanCart() {
  localStorage.clear();
  renderCartList();
}

async function addProdductToCart(id) {
  const productList = await products.getProducts();
  let newProduct = productList.find((product) => product.id === id);
  let cartList = JSON.parse(localStorage.getItem("cart"));
  if (cartList.find((product) => product.id === newProduct.id)) {
    cartList.forEach((product) => {
      if (product.id === newProduct.id) product.quantity += 1;
    });
  } else {
    newProduct.quantity = 1;
    cartList.push(newProduct);
  }
  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });

  localStorage.setItem("cart", JSON.stringify(cartList));
  localStorage.setItem(
    "badgeCart",
    JSON.stringify(JSON.parse(localStorage.getItem("cart")).length)
  );
  Toast.fire({
    icon: "success",
    title: `${newProduct.name} added to cart`,
  });
  setCart();
}
