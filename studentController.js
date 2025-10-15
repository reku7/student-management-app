const Student = require("./studentModel");

exports.createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({error:err.message});
    }
};

exports.getAllStudents = async(req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if(!student) return res.status(404).json({error:err.message});
        res.json(student);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(student);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.deleteStudent = async (req, res) =>{
    try {
        const student = await StudentfindByIdAndDelete(req.parasm.id);
        res.json({message: "Deleted successfully"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};