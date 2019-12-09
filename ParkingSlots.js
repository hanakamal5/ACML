const mongoose = require("mongoose")
const Schema = mongoose.Schema
var ParkingSlots = new Schema({
  slots: [Boolean]
})
module.exports = mongoose.model("ParkingSlots", ParkingSlots)
