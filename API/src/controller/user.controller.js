const profSchema = require("../models/profModel")

// function getProf(req, res){

//     profSchema.findOne({ firstName: req.query.firstName, lastName: req.query.lastName})
//         .then( (prof) =>{
//             console.log(prof)
//             res.send(prof)
//         })
//         .catch( (err) =>{
//             console.log(err)
//             process.exit(-1)
//         })
// }

// function getAllProf(req, res){
//     profSchema.find({})
//     .then((prof) =>{
//         console.log(prof)
//         res.json(prof)
//     })
//     .catch((err)=>{
//         console.log(err)
//         res.status(500).json({error})
//         process.exit(-1)
//     })
// }

function getProf(req, res){
    if(req.query.firstName && req.query.lastName){
        profSchema.findOne({firstName: req.query.firstName, lastName: req.query.lastName})
        .then((prof) =>{
            console.log(prof)
            res.send(prof)
        })
        .catch((err) =>{
            console.log(err)
            process.exit(-1)
        })
    }else{
        profSchema.find({})
        .then((prof) =>{
            console.log(prof)
            res.send(prof)
        })
        .catch((err) =>{
            console.log(err)
            process.exit(-1)
        })
    }
}

function addProf(req, res){
    profSchema.create(req.body)
    .then((prof) =>{
        console.log(prof)
        res.send(prof)
    })
    .catch((err) =>{
        console.log(err)
        process.exit(-1)
    })
}

function editProf(req, res){
    profSchema.findOneAndUpdate({firstName: req.query.firstName , lastName: req.query.lastName}, req.body, {new: true})
    .then((prof) =>{
        console.log(prof)
        res.send(prof)
    })
    .catch((err) =>{
        console.log(err)
        process.exit(-1)
    })
}

function deleteProf(req, res){
    profSchema.deleteOne({firstName: req.query.firstName , lastName: req.query.lastName})
    .then((prof) =>{
        console.log(prof)
        res.send(prof)
    })
    .catch((err) =>{
        console.log(err)
        process.exit(-1)
    })
}





module.exports = { getProf, addProf, editProf, deleteProf }