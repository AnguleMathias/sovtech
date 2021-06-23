import express from "express";

const app = express();

const port = process.env.PORT || 5000;

try {
  app.listen(port, () => console.log(`🚀 GraphQL server running at ${port}`));
} catch (err) {
  console.log(`Server error ${err}`);
}
