const express = require("express");
const router = express.Router();
const { getRentals, getRentalById, createRental } = require("../controllers/rentals");

const rentals = [
    {
        _id: "ksdkdjoo",
        city: "Raleigh",
        title: "Very nice place",
    },
    {
        _id: "129jsj92j",
        city: "New York",
        title: "Very nice city",
    },
]

router.get("", getRentals);

router.get("/:rentalId", getRentalById);

router.post('', createRental)


module.exports = router;