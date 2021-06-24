import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";

import schema from "./Schema/index.js";

const app = express();
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(
  graphqlHTTP({
    graphiql: true,
    schema,
    pretty: true,
  })
);

const port = process.env.PORT || 5000;

try {
  app.listen(port, () => console.log(`🚀 GraphQL server running at ${port}`));
} catch (err) {
  console.log(`Server error ${err}`);
}
