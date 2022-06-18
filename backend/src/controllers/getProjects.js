const Project = require('../Models/Projects');

exports.getProjects = (request, response) => 
{
    Project.find()
    .then(data => response.json(data))
    .catch(error => 
    {
    	throw new Error(error);
    });
};