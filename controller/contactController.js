const asyncHandler = require('express-async-handler');
const Contact = require('../model/contactModel');


// create contact
const createContact = asyncHandler(async (req,res)=>{
    const {name,email,phone} = req.body;
    const createContact = await Contact.create({
        name,
        email,
        phone,
        user_id : req.user.id
    });
    if(createContact){
        res.status(201).json(createContact)
    }
    else{
        res.status(400).json({message : "Something went wrong"})
    }
 });


// get
const getContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(contact.user_id.toString() !== req.user.id){
        res.status(401);
        throw new Error('No access to delete');
    }
    res.status(200).json(contact)
});

// update
const updateContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(401).json({message : "Something went wrong"})
        throw new Error('user not found');
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(401);
        throw new Error('No access to delete');
    }
    const updateUserContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true }
    );

    res.status(201).json(updateUserContact);
 });

// delete
const deleteContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
   
    if(!contact){
        res.status(404);
        throw new Error('user not found');
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(404);
        throw new Error('No access to delete');
    }
    await Contact.deleteOne({_id : contact.user_id});
    res.status(201).json(contact);
 });


// getAll
const getAllContacts = asyncHandler(async (req,res)=>{
    console.log(`req.user.id ${req.user.id}`)
    const contact = await Contact.find({user_id : req.user.id});
    if(contact){
        res.status(200).json(contact)
    }
    else{
        res.status(400).json({message : "Something went wrong"})
    }
});


 module.exports = { getContact,createContact,updateContact,deleteContact,getAllContacts}