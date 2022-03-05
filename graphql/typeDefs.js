const gql = require("graphql-tag")

const typeDefs = gql`

    type Restaurant {
        id: ID!
        name: String!
        position: String!
        rateSumm: Float
        feedbacks: [Feedback]
    }
    type Feedback {
        id: ID!
        rate: Int!
        body: String
    }
    type Query {
        getRestaurants: [Restaurant]
        getRestaurant(restaurantId: ID!): Restaurant
    }
    type Mutation {
        addFeedback(restaurantId: ID!, rate: Int!, body: String): Restaurant! 
    }
`

module.exports = typeDefs