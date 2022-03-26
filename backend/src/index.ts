import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolver";
import schemas from "./schema";

const typeDefs = schemas;

// GraphQL schema
const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// Create an express server and a GraphQL endpoint
const app = express();
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(4000, () =>
    console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);
