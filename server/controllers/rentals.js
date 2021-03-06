const Rental = require("../models/rental");

exports.getRentals = (req, res) => {
  Rental.find({}, (err, foundRentals) => {
    if (err) {
      return Rental.sendError(res, {
        status: 422,
        detail: "Cannot retrieve Rental data.",
      });
    }

    return res.json(foundRentals);
  });
};

exports.getRentalById = (req, res) => {
  const { rentalId } = req.params;

  Rental.findById(rentalId, (err, foundRental) => {
    if (err) {
      return Rental.sendError(res, {
        status: 422,
        detail: "Cannot retrieve Rental data.",
      });
    }
    return res.json(foundRental);
  });
};

exports.createRental = (req, res) => {
  const rentalData = req.body;

  Rental.create(rentalData, (err, createdRental) => {
    if (err) {
      return Rental.sendError(res, {
        status: 422,
        detail: "Cannot post Rental data.",
      });
    }

    return res.json({
      message: `Rental with id ${createdRental._id} was added!`,
    });
  });
};
