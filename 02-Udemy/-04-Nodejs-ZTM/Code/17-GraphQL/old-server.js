const PORT = 3000;
const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

// Root Query type
const schema = buildSchema(`
  type Query {
    products: [Product]
    orders: [Order]
  }

  type Product {
    id: ID!
    description: String!
    reviews: [Review]
    price: Float!
  }

  type Review {
    rating: Int!
    comment: String
  }

  type Order {
    date: String!
    subtotal: Float!
    items: [OrderItem]
  }

  type OrderItem {
    product: Product!
    quantity: Int!
  }

`);
const root = {
  products: [
    {
      id: "redshoe",
      description: "Red Shoe",
      price: 42.61,
    },
    {
      id: "bluejeans",
      description: "Blue Jeans",
      price: 55.55,
    },
  ],

  orders: [
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
  ],
};

// CREATE THE SERVER
const app = express();

// GraphQL middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Running GraphQL server...`);
});
