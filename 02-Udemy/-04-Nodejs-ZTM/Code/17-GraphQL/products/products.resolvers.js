const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts;
    },
    productsByPrice: (_, args) => {
      return productsModel.getAllProducts(args.min, args.max);
    },
    product: (_, args) => {
      return productsModel.getProductById(args.id);
    },
  },

  Mutation: {
    addNewProduct: (_, args) => {
      return productsModel.addNewProduct(...args);
    },

    addNewProductReview: (_, args) => {
      return productsModel.addNewProductReview(...args);
    },
  },
};
