var mongoose = require('mongoose'),
    tkSchema = new mongoose.Schema({
        name: { type: String, index: 1 },
        comment: String
        // setup_time: { type: Date, default: Date.now },
        // image_url: String
    });

module.exports = mongoose.model('Tk', tkSchema);
