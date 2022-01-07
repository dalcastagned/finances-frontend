import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://192.168.0.68:4000",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          items: {
            merge(_, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});
