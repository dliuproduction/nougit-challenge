const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        getEntries: [String]
    }
`;
module.exports = typeDefs;
