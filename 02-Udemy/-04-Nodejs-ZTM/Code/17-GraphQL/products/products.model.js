const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.61,
    reviews: [],
  },
  {
    id: "bluejeans",
    description: "Blue Jeans",
    price: 55.55,
    reviews: [],
  },
];

// QUERY
function getAllProducts() {
  return products;
}
function getProductsByPrice(min, max) {
  return products.filter((product) => product.price >= min && product <= max);
}
function getProductById(id) {
  return products.find((product) => product.id === id);
}

// MUTATION
function addNewProduct({ id, description, price }) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);

  return newProduct;
}

function addNewProductReview({ id, rating, comment }) {
  const matchedProduct = getProductById(id);
  if (!matchedProduct) return;

  const newProductReview = {
    rating,
    comment,
  };
  newProductReview.reviews.push(newProductReview);
  return newProductReview;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
