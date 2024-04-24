const getContact = ((req,res)=>{
    res.status(200).json({message:'Get contact details'})
 });

const createContact = ((req,res)=>{
    console.log('this is req body',req.body);
    res.status(200).json({message:'Create contact'})
 });

const updateContact = ((req,res)=>{
    res.status(200).json({message:`Update contact ${req.params.id}`})
 });

const readContact = ((req,res)=>{
    res.status(200).json({message:`Read contact ${req.params.id}`})
 });

const deleteContact = ((req,res)=>{
    res.status(200).json({message:`Delete contact ${req.params.id}`})
 });


 module.exports = { getContact,createContact,updateContact,readContact,deleteContact}