const { MongoDataSource } = require('apollo-datasource-mongodb');

class Task extends MongoDataSource {}

module.exports = Task ;
