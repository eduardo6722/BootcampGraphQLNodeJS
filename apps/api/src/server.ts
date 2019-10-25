import { resolve } from "path";
import { GraphQLServer } from "graphql-yoga";

const users = [];

const typeDefs = resolve(__dirname, "schema.graphql");
const resolvers = {
  Query: {
    users: () => users
  },
  Mutation: {
    createUser: (parent, args, context, info) => {
      const { name, email } = args.params;
      const user = { id: users.length + 1, name, email };
      users.push(user);
      return user;
    }
  }
};

const Server = new GraphQLServer({
  typeDefs,
  resolvers
});

export default Server;
