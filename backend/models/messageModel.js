const mongoose = require('mongoose');

//Model contains 3 parts: Id of the sender(user), content of the message, ref to the chat which belongs to.
const messageModel = mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        content: {
            type: String, 
            trim: true
        },
        chat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chat",
        }
    },
    {
        timestamps: true,
    }
);

const Message = mongoose.model("Message", messageModel);

module.exports = Message;