const Messages = require('../Models/Message');

exports.getMessages = (request, response) => 
{
    Messages.find()
    .then(data => response.json(data))
    .catch(error => 
    {
    	throw new Error(error);
    });
};