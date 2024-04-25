const asyncHandler = require('express-async-handler');
const Contact = require('../model/contactModel');


// create contact
const createContact = asyncHandler(async (req,res)=>{
    const {name,email,phone} = req.body;
    const createContact = await Contact.create({
        name,
        email,
        phone
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
    if(contact){
        res.status(200).json(contact)
    }
    else{
        res.status(400).json({message : "Something went wrong"})
    }
});

// update
const updateContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404).json({message : "Something went wrong"})
        throw new Error('user not found');
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
    await Contact.deleteOne();
    res.status(201).json(contact);
 });


 module.exports = { getContact,createContact,updateContact,deleteContact}