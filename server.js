const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors')
const app = express();
// Allow CORS
app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
})
);


const PORT = process.env.PORT || 5000
app.listen(PORT,() => {
    return console.log(`Server is running on port ${PORT}`); 
})