const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    fileUrl: { type: String, required: true },
    userId: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);