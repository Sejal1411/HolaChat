import mongoose from 'mongoose';

const messageModel = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat',
    },
  },
  {
    timeStamp: true,
  }
);

const Message = mongoose.model('Message', messageModel);

export default Message;
