const mongoose = require('mongoose');

const ProjectsSchema = mongoose.Schema(
{
  name: 
  {
    type: String,
    required: true
  },
  desc: 
  {
    type: String,
    required: true
  },
  image: 
  {
   type: String,
   required: true
  },
  github: 
  {
   type: String,
   required: true
  },
  responsive: 
  {
   type: Array,
   required: true
  },
  technologies: 
  {
    type: Array,
    required: true
  },
  host: 
  {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('projects', ProjectsSchema);