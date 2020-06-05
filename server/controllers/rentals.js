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


exports.getRentals = (req, res) => {

    return res.json(rentals)
}

exports.getRentalById = (req, res) => {
    const { rentalId } = req.params;
    const rental = rentals.find(r => r._id === rentalId);

    return res.json(rental)
}

exports.createRental = (req, res) => {
    const rentalData = req.body;
    rentals.push(rentalData);
    return res.json({ message: `Rental with id ${rentalData._id} was added!` })
}

exports.deleteRental = (req, res) => {

    const { rentalId } = req.params;
    const rIndex = rentals.findIndex(r => r._id === rentalId);
    rentals.splice(rIndex, 1);

    return res.json({ message: `Rental with id ${rentalId} was deleted!` })
}

exports.updateRental = (req, res) => {

    const { rentalId } = req.params;
    const rentalToUpdate = req.body;
    const rIndex = rentals.findIndex(r => r._id === rentalId);

    rentals[rIndex].title = rentalToUpdate.title;
    rentals[rIndex].city = rentalToUpdate.city;

    return res.json({ message: `Rental with id ${rentalId} was updated!` })
}