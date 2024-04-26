const express = require('express');

const router = express.Router();

const validateUser = require('../middleware/validateToken');

const {
    getContact,
    createContact,
    updateContact,
    deleteContact,
    getAllContacts
} = require('../controller/contactController')

router.use(validateUser);

router.route("/").post(createContact).get(getAllContacts);

router.route("/:id").put(updateContact).delete(deleteContact).get(getContact);


 module.exports = router;