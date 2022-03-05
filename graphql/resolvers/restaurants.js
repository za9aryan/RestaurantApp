const Restaurant = require('../../models/Restaurant')
const typeDefs = require('../typeDefs')
const getNumberSumm = require('../../utils/getNumberSumm')


module.exports = {
    Query: {
        async getRestaurants() {
            try {
                const restaurants = await Restaurant.find().sort({ "rateSumm": -1 })
                return restaurants
            } catch (err) {
                console.log(err)
            }
        },
        async getRestaurant(_, { restaurantId }) {
            try {
                const restaurant = await Restaurant.findById(restaurantId)
                return restaurant
            } catch (err) {
                console.log(err)
            }
        }
    },
    Mutation: {
        async addFeedback(_, { restaurantId, rate, body }) {
            try {
                const restaurant = await Restaurant.findById(restaurantId)
                if (restaurant) {
                    restaurant.feedbacks.unshift({ rate, body })
                    const allRates = restaurant.feedbacks.map(({ rate: r }) => r)
                    const rateSumm = getNumberSumm(allRates)
                    restaurant.rateSumm = rateSumm
                    await restaurant.save()
                    return restaurant
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}