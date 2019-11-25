const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        getEntries: [Task]
    }

    enum Statuses {
        OPEN
        CLOSED
    }

    type Task {
        author: Author
        date: String
        popularity: Float
        isTrending: Boolean
        title: String
        description: String
        numComments: Int
        thumbnail: String
        codeSubmissionTotal: Int
        pledgeTotal: Float
        pledgeGoal: Float
        pledgerCount: Int
        status: Statuses
    }

    type Author {
        name: String
        picture: String
        title: String
        score: Float
    }
`;
module.exports = typeDefs;
