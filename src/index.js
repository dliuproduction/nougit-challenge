const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const TaskSource = require('./datasources/task');

const TaskModel = require('./models/task')

const dataSources = () => ({
    task: new TaskSource(TaskModel)
})

// Set up Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources
});

const connectionString =
    'mongodb+srv://admin:admin@nougit-challenge-75dbp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(connectionString).then(() => {
    TaskModel.initTasks(TaskModel)
    server
        .listen({ port: 4000 })
        .then(({ url }) => console.log(`🚀 app running at ${url}`));
});

module.exports = {
    dataSources,
    typeDefs,
    resolvers,
    ApolloServer,
    TaskSource,
    server
};
