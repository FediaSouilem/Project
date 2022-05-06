const Project = require ('../models/projectModel');



//@desc add a new Project 
//@params POST /api/project/
//@access PRIVATE - admin
exports.addProject = async(req,res)=>{
   try {
           const newProject = await Project.create({...req.body});
           res.status(201).json(newProject);
        } catch (error) {
            res.status(500).json({msg:'somthing went wrong !'});
   }
};

//@desc get a list of all project
//@params Get /api/project/
//@access PUBLIC
exports.getProject = async(req,res)=>{
    try {
            const project = await Project.find();
            res.status(201).json(project);
         } catch (error) {
             res.status(500).json({msg:'somthing went wrong !'});
    }
 };

 //@desc update project by id
//@params PUT /api/project/:ProjectId
//@access PRIVATE admin
exports.updateProject = async(req,res) => {
    try {
            await Project.findByIdAndUpdate(req.params.projectId, {...req.body },{ new: true});
            res.status(200).json({ msg: 'project updated'});
         } catch (error) {
             res.status(500).json({msg:'somthing went wrong !'});
    }
 };

  //@desc delete project by id
//@params DELETE /api/project/:projectId
//@access PRIVATE admin
exports.deleteProject = async(req,res) => {
    try {
            await Project.findByIdAndDelete(req.params.projectId);
            res.status(200).json({ msg: 'project deleted'});
         } catch (error) {
             res.status(500).json({msg:'somthing went wrong !'});
    }
 };