import express from "express";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(
  graphqlHTTP({
    graphiql: true,
    pretty: true,
  })
);

const port = process.env.PORT || 5000;

try {
  app.listen(port, () => console.log(`🚀 GraphQL server running at ${port}`));
} catch (err) {
  console.log(`Server error ${err}`);
}
