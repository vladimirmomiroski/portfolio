const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema(
{
  name: 
  {
    type: String,
    required: false
  },
  company: 
  {
    type: String,
    required: false
  },
  email: 
  {
   type: String,
   required: false
  },
  msg: 
  {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('messages', MessageSchema);