const orders = [
  {
    date: "2009-09-09",
    subtotal: 90.22,
    items: [
      {
        product: {
          id: "redshoe",
          description: "Old Red Shoe",
          price: 45.11,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
