const { model, Schema } = require("mongoose");


const restaurantSchema = new Schema({
    name: String,
    position: String,
    feedbacks: [{
        rate: Number,
        body: String
    }]
})

module.exports = model("Restaurant", restaurantSchema)