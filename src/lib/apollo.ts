import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.hygraph.com/v2/cl64fsvga7wg501t74nfw6uvm/master',
    cache: new InMemoryCache()
})