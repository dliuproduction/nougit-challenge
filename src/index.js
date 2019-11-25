const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const TaskModel = require('./models/task');

const connectionString =
    'mongodb+srv://admin:admin@nougit-challenge-75dbp.mongodb.net/test?retryWrites=true&w=majority';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        db: { task: TaskModel }
    }
});

mongoose.connect(connectionString).then(() => {
    TaskModel.initTasks(TaskModel);
    server
        .listen({ port: 4000 })
        .then(({ url }) => console.log(`🚀 app running at ${url}`));
});

module.exports = {
    typeDefs,
    resolvers,
    ApolloServer,
    server
};
