const express = require('express');

const router = express.Router();

const {
    getContact,
    createContact,
    updateContact,
    deleteContact
} = require('../controller/contactController')

router.route("/").post(createContact);

router.route("/:id").put(updateContact).delete(deleteContact).get(getContact);


 module.exports = router;