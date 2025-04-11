import Project from '../models/Project.js';

export const createProject = async (req, res) => {
  try {
    const { title, description, techStack, creator } = req.body;
    const project = await Project.create({ title, description, techStack, creator, members: [creator] });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('members creator');
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
