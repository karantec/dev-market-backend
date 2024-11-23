const mongoose = require('mongoose');

const modalDataSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Consider adding validation like 'required'
  category: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String },
  price: { type:String, required: true }, // Change to Number if price needs to be a number
  ProductImage: { type: String },
  Prodhumbnail: { type: String }
}, { timestamps: true }); // Optionally add timestamps for createdAt and updatedAt

// Pre-save hook (if necessary)
modalDataSchema.pre('save', async function(next) {
  // Logic can be added here, e.g., format the price or other data
  next();
});

module.exports = mongoose.model("ModalData", modalDataSchema);
