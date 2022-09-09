const PORT = 3000;
const express = require("express");

const { ApolloServer } = require("apollo-server-express");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

// Root Query type
// const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const typesArray = loadFilesSync("./**/*", { extensions: ["graphql"] });
const resolversArray = loadFilesSync("./**/*", {
  extensions: ["resolvers.js"],
});

async function startApolloServer() {
  // CREATE THE SERVER
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });
}

// GraphQL middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Running GraphQL server...`);
});
