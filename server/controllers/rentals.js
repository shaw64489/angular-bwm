const Rental = require("../models/rental");

exports.getRentals = (req, res) => {
  Rental.find({}, (err, foundRentals) => {
    if (err) {
      return res.status(422).send({
        errors: [
          { title: "Rental Error!", message: "Cannot retrieve Rental data." },
        ],
      });
    }

    return res.json(foundRentals);
  });
};

exports.getRentalById = (req, res) => {
  const { rentalId } = req.params;

  Rental.findById(rentalId, (err, foundRental) => {
    if (err) {
      return res.status(422).send({
        errors: [
          { title: "Rental Error!", message: "Cannot retrieve Rental data." },
        ],
      });
    }
    return res.json(foundRental);
  });
};

exports.createRental = (req, res) => {
  const rentalData = req.body;

  // const newRental = new Rental(rentalData);

  // newRental.save((err, createdRental) => {
  //   if (err) {
  //     return res.status(422).send({
  //       errors: [
  //         { title: "Rental Error!", message: "Cannot create Rental data." },
  //       ],
  //     });
  //   }

  //   return res.json({
  //     message: `Rental with id ${createdRental._id} was added!`,
  //   });
  // });
  Rental.create(rentalData, (err, createdRental) => {
    if (err) {
      return res.status(422).send({
        errors: [
          { title: "Rental Error!", message: "Cannot create Rental data." },
        ],
      });
    }

    return res.json({
      message: `Rental with id ${createdRental._id} was added!`,
    });
  });
};
