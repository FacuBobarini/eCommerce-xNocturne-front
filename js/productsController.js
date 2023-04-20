class Products {
  async getProducts() {
    const products = await fetch("../data/products.json");
    return await products.json();
  }

  async filterProducts(option) {
    const products = this.getProducts();
    const result = products.filter((product) => product.category === option);
    return result;
  }

  async getProductById(id) {
    const products = await this.getProducts();
    const result = products.find((product) => product.id === id);
    return result;
  }
}

const products = new Products();
