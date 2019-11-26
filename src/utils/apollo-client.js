import ApolloClient, { InMemoryCache } from 'apollo-boost';
import withApollo from 'next-with-apollo';

const GRAPHQL_URL = 'http://localhost:4000';

export default withApollo(
    ({ ctx, headers, initialState }) =>
        new ApolloClient({
            uri: GRAPHQL_URL,
            cache: new InMemoryCache().restore(initialState || {})
        })
);
