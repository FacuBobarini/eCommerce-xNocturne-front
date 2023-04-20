function renderCartList() {
  cart();
  setCart();
  let totalPayment = 0;
  let cartList = JSON.parse(localStorage.getItem("cart"));
  domInfo.innerHTML = "";
  if (!cartList[0]) {
    const products = document.createElement("h1");
    products.className = "cartProductContainer";
    products.innerHTML = `
    Cart is empty!
    `;
    domInfo.appendChild(products);
  } else {
    cartList.forEach((product) => {
      totalPayment += product.price * product.quantity;
      const products = document.createElement("div");
      products.className = "cartProductContainer";
      products.innerHTML = `
    <div class="crtProduct">
        <div class="crtProductDetail">
            <img class="crtPImg" alt="img" src=${product.img} />
            
            <div class="crtDetails">
                <span class="crtProductName"> <b>Product: </b>${
                  product.name
                }</span>
                
                <div class="crtProductName"><b>Quantity: </b>${
                  product.quantity
                }</div>
                
                <span class="crtProductId"> <b>Price: </b>${
                  product.price
                }</span>
            </div>
        </div>
        <div class="ctrPriceDetail">
            
            <div class="crtProdPrice">$${product.price * product.quantity}</div>
            <hr/>
        </div>
        
    </div>
    <hr/>
    `;
      domInfo.appendChild(products);
    });
  }

  const payment = document.createElement("div");
  domSummaryItem.innerHTML = "";
  payment.className = "cartProductContainer";
  payment.innerHTML = `
    <span class="totalPayment">Total</span>
    <span class="totalPayment">$ ${totalPayment.toFixed(2)}</span>
  `;
  domSummaryItem.appendChild(payment);
}

domCleanCart.addEventListener("click", cleanCart);

domSummaryButton.addEventListener("click", finish);

renderCartList();
