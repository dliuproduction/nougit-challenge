module.exports = {
    Query: {
        getEntries: async (_, { pageSize = 5, after }, { db }) => {
            const query = db.task.find({}, null, { skip: after });
            const results = await query.exec();

            const newEntriesCount = Math.min(results.length, pageSize);

            const entries = results.slice(0, newEntriesCount);

            const newCursor = after + newEntriesCount;

            return {
                tasks: entries,
                cursor: newCursor,
                hasMore: results.length > pageSize
            };
        }
    }
};
