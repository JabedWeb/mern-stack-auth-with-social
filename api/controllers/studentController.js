/**
 * @public
 * @route /api/student
 * @method GET
 */

export const getAllStudents =(req,res)=>{
    res.send('I am from all students')
}
/**
 * @public
 * @route /api/student
 * @method POST
 */

export const getSingleStudent =(req,res)=>{
    res.send('I am from single students')
}
/**
 * @public
 * @route /api/student/:id
 * @method POST
 */

 export const createStudent =(req,res)=>{
    res.send('I am from create students')
}

/**
 * @public
 * @route /api/student/:id
 * @method PUT/PATCH
 */

export const updateStudent =(req,res)=>{
    res.send('I am from update students')
}
/**
 * @public
 * @route /api/student/:id
 * @method DELETE
 */

export const deleteStudent =(req,res)=>{
    res.send('I am from delete students')
}

