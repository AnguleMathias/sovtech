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
    Person: {
      type: TypePerson,
      description: "Given name search for a star wars character",
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: (root, args) =>
        fetch(`${BASE_URL}/people/?search=${args.name}`)
          .then((response) => response.json())
          .then((data) => {
            return data.results[0];
          }),
    },
  }),
});

export default new GraphQLSchema({
  query: QueryType,
});
