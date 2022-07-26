
import Student from "../models/Student.js"

/**
 * @public
 * @route /api/student
 * @method GET
 */



export const getAllStudents = async(req,res)=>{
   try{
    const students=await Student.find();
    res.status(200).json(students)
   }
   catch(error){
    console.log(error);
   }
}
/**
 * @public
 * @route /api/student
 * @method POST
 */

export const getSingleStudent =async (req,res)=>{
    const {id}=req.params;
    try{
        const student=await Student.findById(id);
        res.status(200).json(student)
       }
       catch(error){
        console.log(error);
       }
}
/**
 * @public
 * @route /api/student/:id
 * @method POST
 */

 export const createStudent = async(req,res)=>{

    try{
        const student=await Student.create(req.body);
        res.status(200).json(student)
       }
       catch(error){
        console.log(error);
       }
}

/**
 * @public
 * @route /api/student/:id
 * @method PUT/PATCH
 */

export const updateStudent = async(req,res)=>{

    const {id}=req.params;
    try{
        const student=await Student.findByIdAndUpdate(id,req.body,{new : true});
        res.status(200).json(student)
       }
       catch(error){
        console.log(error);
       }
}
/**
 * @public
 * @route /api/student/:id
 * @method DELETE
 */

export const deleteStudent =async(req,res)=>{
    const {id}=req.params;
    try{
        const student=await Student.findByIdAndDelete(id);
        res.status(200).json(student)
       }
       catch(error){
        console.log(error);
       }
}

