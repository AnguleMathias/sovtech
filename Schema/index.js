import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import fetch from "node-fetch";

import TypePerson from "./Types/index.js";
import { BASE_URL } from "../Constants/index.js";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root query",
  fields: () => ({
    People: {
      type: new GraphQLList(TypePerson),
      description: "All star wars characters",
      args: {
        page: {
          type: GraphQLString,
        },
      },
      resolve: (root, args) =>
        fetch(`${BASE_URL}/people/?page=${args.page ? args.page : "1"}`)
          .then((response) => response.json())
          .then((data) => {
            return data.results;
          }),
    },
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});
