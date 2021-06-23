import { GraphQLObjectType, GraphQLString } from "graphql";

const TypePerson = new GraphQLObjectType({
  name: "Person",
  description: "A person object in Star Wars",
  fields: () => ({
    name: {
      type: GraphQLString,
      description: "Person's name",
    },
    height: {
      type: GraphQLString,
      description: "Person's height",
    },
    mass: {
      type: GraphQLString,
      description: "Person's mass/weight",
    },
    gender: {
      type: GraphQLString,
      description: "Person's gender: male/female",
    },
    homeworld: {
      type: GraphQLString,
      description: "Location area of the person",
    },
  }),
});

export default TypePerson;
