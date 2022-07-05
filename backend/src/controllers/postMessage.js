const Message = require("../Models/Message");

exports.postMessage = (request, response) => {
  const mail = request.body;

  const msgPost = new Message({
    name: mail.name,
    company: mail.company,
    email: mail.email,
    msg: mail.msg,
  });

  msgPost
    .save()
    .then((data) => response.json(data))
    .catch((error) => {
      throw new Error(error);
    });
};
