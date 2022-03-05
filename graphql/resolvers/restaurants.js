const Restaurant = require('../../models/Restaurant')


module.exports = {
    Query: {
        async getRestaurants() {
            try {
                const restaurants = await Restaurant.find()
                return restaurants
            } catch (err) {
                console.log(err)
            }
        },
        async getRestaurant(_, { restaurantId }) {
            console.log(restaurantId)
            try {
                const restaurant = Restaurant.findById(restaurantId)
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
                    await restaurant.save()
                    return restaurant
                }
            } catch (err) {
                console.log(err)
            }
        }
    }
}