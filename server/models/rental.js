const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: [128, "Invalid length! Maximum is 128 characters"],
  },
  city: { type: String, required: true, lowercase: true },
  street: {
    type: String,
    lowercase: true,
    required: true,
    minlength: [4, "Invalid length! Minimum is 4 characters"],
  },
  category: { type: String, required: true, lowercase: true },
  image: { type: String, required: true },
  numOfRooms: { type: Number, required: true },
  description: { type: String, required: true },
  dailyPrice: { type: Number, required: true },
  shared: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

rentalSchema.statics.sendError = function (res, config) {
  const { status, detail } = config;
  return res.status(status).send({
    errors: [{ title: "Rental Error!", detail }],
  });
};

//test

module.exports = mongoose.model("Rental", rentalSchema);
