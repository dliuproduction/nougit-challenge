const mongoose = require('mongoose');
const fs = require('fs');
const path = require("path");

const taskSchema = new mongoose.Schema({
    author: { name: String, picture: String, title: String, score: Number },
    date: Date,
    popularity: Number,
    isTrending: Boolean,
    title: String,
    description: String,
    numComments: Number,
    thumbnail: String,
    codeSubmissionTotal: Number,
    pledgeTotal: Number,
    pledgeGoal: Number,
    pledgerCount: Number,
    status: { type: Number, enum: [0, 1] }
});

let data = fs.readFileSync(path.resolve(__dirname, '../../../entries.json'));
let entries = JSON.parse(data);

taskSchema.statics.initTasks = tasks => {
    tasks.deleteMany().then(() => {
        entries.forEach(entry => {
            tasks.create(entry);
        });
    });
};

var taskModel = mongoose.model('task', taskSchema);
module.exports = taskModel ;
