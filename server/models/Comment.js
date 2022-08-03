const mongoose = require('mongoose');

const { Schema } = mongoose;


const commentSchema = new Schema({
    commentText: {
        type: String,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    commentAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
