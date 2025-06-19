const ModelAlumno = require("../../models/alumnos/alumno.model")

const ctrls = {}

//get all alumnos
ctrls.getAlumnos = async(req, res) => {
    const alumnos = await Alumno.find({}).sort({createdAt: -1})
    res.status(200).json(alumnos)
}

//get a single alumno
ctrls.getAlumno = async(req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no hay tal alumno'})
    }

    const alumno = await Alumno.findById(id)

    if (!alumno) {
        return res.status(404).json({error: 'no hay tal alumno'})
    }

    res.status(200).json(alumno)
}

//post a new alumno
ctrls.createAlumno = async(req, res) => {
    const {rut, nombre, curso, edad, peso, altura} = req.body

    try {
        const alumno = await Alumno.create({rut, nombre, curso, edad, peso, altura})
        res.status(200).json(alumno)
    } catch {
        res.status(400).json({error: error.message})
    }
}

//delete an alumno
ctrls.deleteAlumno = async(req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no hay tal alumno'})
    }

    const alumno = await Alumno.findOneAndDelete({_id: id})

    if (!alumno) {
        return res.status(404).json({error: 'no hay tal alumno'})
    }

    res.status(200).json(alumno)
}

//update an alumno
ctrls.updateAlumno = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no hay tal alumno'})
    }

    const alumno = await Alumno.findOneAndUpdate({_id: id}, {
        ...req.body
    }, {new: true})

   if (!alumno) {
        return res.status(404).json({error: 'no hay tal alumno'})
    }
    
    res.status(200).json(alumno)
}

module.exports = ctrls