import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/vivek-suthar/block-flicks',
    cache: new InMemoryCache(),
})

export default client
