const express = require('express');

const router = express.Router();

const {
    getContact,
    createContact,
    updateContact,
    readContact,
    deleteContact
} = require('../controller/contactController')

router.route("/").get(getContact).post(createContact);

router.route("/:id").put(updateContact).get(readContact).delete(deleteContact);


 module.exports = router;