const mongoose = require("mongoose");

const SkillsSchema = mongoose.Schema({
  techSkills: {
    type: Array,
    required: true,
  },
  softSkills: {
    type: Array,
    required: true,
  },
  hardSkills: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("skills", SkillsSchema);
