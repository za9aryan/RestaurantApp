const restaurantResolver = require('./restaurants')


module.exports = {
    Query: {
        ...restaurantResolver.Query
    },
    Mutation: {
        ...restaurantResolver.Mutation
    }
}