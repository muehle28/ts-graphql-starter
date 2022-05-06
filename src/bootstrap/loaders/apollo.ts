import Container from "typedi";
import { ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled } from 'apollo-server-core';
import { ApolloServer } from "apollo-server-express";

import { config } from "../../config";
import { buildSchema } from "../../utils";

export default async () => {
  const schema = await buildSchema();

  return new ApolloServer({
    schema,
    plugins: [
      config.isDev
        ? ApolloServerPluginLandingPageGraphQLPlayground(): 
        ApolloServerPluginLandingPageDisabled(),
    ],
    /*context: params => () => {
      console.log(params.req.body.query);
      console.log(params.req.body.variables);
    }*/
  });
};
