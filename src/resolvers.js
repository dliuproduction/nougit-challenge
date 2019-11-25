module.exports = {
    Query: {
        getEntries: (_, { pageSize = 20, after }, { db }) => {
            return db.task.find({}, function(err, docs) {
                if (err) {
                    throw err;
                }
            });
        }
    },
    Statuses: {
        CLOSED: 0,
        OPEN: 1
    }
};
