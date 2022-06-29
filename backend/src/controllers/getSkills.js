const Skills = require('../Models/Skills');

exports.getSkills = (request, response) => 
{
    Skills.find()
    .then(data => response.json(data))
    .catch(error => 
    {
    	throw new Error(error);
    });
};