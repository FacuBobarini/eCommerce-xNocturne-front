function storageGetCart() {
  return JSON.parse(localStorage.getItem("cart"));
}

function setCart() {
  if (!storageGetCart()) {
    localStorage.setItem("cart", JSON.stringify({ badge: 0, cart: [] }));
  }
  let badgeCart = domBadge;
  const badge = JSON.parse(localStorage.getItem("cart"));
  badgeCart.innerHTML = `${badge.badge > 0 ? badge.badge : ""}`;
}

function cleanCart() {
  localStorage.clear();
  renderCartList();
}

async function addProdductToCart(id) {
  const productList = await products.getProductById(id);
  let { badge, cart } = storageGetCart();
  if (cart.find((product) => product.id === productList.id)) {
    cart.forEach((product) => {
      if (product.id === productList.id) product.quantity += 1;
    });
  } else {
    productList.quantity = 1;
    cart.push(productList);
  }
  Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });

  localStorage.setItem("cart", JSON.stringify({ badge: badge + 1, cart }));
  Toast.fire({
    icon: "success",
    title: `${productList.name} added to cart`,
  });
  setCart();
}
