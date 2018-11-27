const {GraphQLServer} = require('graphql-yoga');
const resolvers = require('./schema/resolvers.js');
const {readFileSync} = require('fs');
const typeDefs = readFileSync(`${__dirname}/schema/typeDefs.graphql`, 'utf8');

const options = {
    port: 3001,
    endpoint: '/graphql',
    playground: '/graphiql'
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(options, ()=>{
    console.log(`Server is listening on localhost:${options.port} 🔥`)
})