import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the Vendor Schema.
const VendorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  twitter: {
    type: String,
    unique: true
  },
  instagram: {
    type: String,
    unique: true
  },
  address: {
    type: String,
  },
  productOfferings: {
    type: Array
  },
  yearFounded: {
    type: String
  },
  rating: {
    type: Number
  }
});

const Vendor = mongoose.model("Vendor", VendorSchema);

export default Vendor;