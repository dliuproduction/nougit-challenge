const { gql } = require('apollo-server');

module.exports = gql`
    type Query {
        getEntries(pageSize: Int, after: Int): TaskEntry
    }

    type TaskEntry {
        cursor: Int
        hasMore: Boolean
        tasks: [Task]
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
        status: Int
    }

    type Author {
        name: String
        picture: String
        title: String
        score: Float
    }
`;
