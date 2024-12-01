import express from "express";
import { ApolloServer } from "@apollo/server";
import typeDefs from "./graphQl/typeDefs.js";
import { expressMiddleware } from "@apollo/server/express4";
import resolvers from "./graphQl/resolvers.js";
const app = express();
let server;
// const startGraphQLServer = async () => {
server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();
//   await server.applyMiddleware({ app });
// };
// start<TbAddressBook />GraphQLServer();
app.use("/graphql", express.json(), expressMiddleware(server));
app.listen(3000, () => {
  console.log("listening on port 3000");
});
