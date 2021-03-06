const { ApolloServer } = require("apollo-server");
const gql = require('graphql-tag')
const typeDefs = require("./graphql/typeDefs")
const mongoose = require("mongoose")
const resolvers = require("./graphql/resolvers")
const { MONGODB } = require("./config.js")


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
})

mongoose
    .connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log("MONGODB Connected");
        return server.listen({ port: 5000 })
    })
    .then(res => {
        console.log(`Started on port ${res.url}`)
    })
