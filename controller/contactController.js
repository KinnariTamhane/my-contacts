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
        res.status(404);
        throw new Error('User not created');
    }
    res.status(201).json(createContact)
 });


// get contact
const getContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(contact.user_id.toString() !== req.user.id){
        res.status(404);
        throw new Error('No access to delete');
    }
    res.status(200).json(contact)
});

// update contact
const updateContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404).json({message : "Something went wrong"})
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

// delete contact
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


// getAll contacts
const getAllContacts = asyncHandler(async (req,res)=>{
    const contact = await Contact.find({user_id : req.user.id});
    if(!contact){
        res.status(404);
        throw new Error('No access to delete');
        
    }
    res.status(200).json(contact)
});


 module.exports = { getContact,createContact,updateContact,deleteContact,getAllContacts}