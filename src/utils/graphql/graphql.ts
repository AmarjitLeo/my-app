import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "../../resolvers";

export async function GraphConnection(app: any) {
    const schema = await buildSchema({
        resolvers,
    });
    const server = new ApolloServer({
        schema,
    });
    server.applyMiddleware({ app });
    await server.start();
}