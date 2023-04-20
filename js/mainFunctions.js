// set sweet alert
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

//primary functions
async function renderProduct(product) {
  const products = document.createElement("div");
  products.className = "pContainer";
  products.innerHTML = `
    <div class="pCircle"/>
    <img class="pImg" src=${product.img}/>
    <div class="pInfo">
          <div class="pIcon" onclick="addProdductToCart(${product.id})">
          <i class="fa fa-shopping-cart"  "aria-hidden="true"></i>
          </div>
          <div class="pIcon" onclick="showProduct(${product.id})">
          <i class="fa fa-search" id="sIcon" style="font-size:20px"></i>
          </div>
    </div>
    `;
  return domProductsContainer.appendChild(products);
}

async function showProduct(id) {
  const productList = await products.getProducts();
  let product = productList.find((product) => product.id === id);
  Swal.fire({
    title: product.name,
    text: "Precio: $" + product.price,
    imageUrl: product.img,
    confirmButtonText: "Buy",
  }).then((result) => {
    if (result.isConfirmed) addProdductToCart(product.id);
  });
}

function finish() {
  Swal.fire("purchase completed thank you");
  cleanCart();
}
