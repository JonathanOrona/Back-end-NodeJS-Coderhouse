import dotenv from 'dotenv';

dotenv.config()

const env = {
    port: process.env.PORT,
    mongoUrl: 'mongodb+srv://becca:123@coderhousebackend.gbvr1iq.mongodb.net/?retryWrites=true&w=majority',
    baseUrl: 'http://localhost:8080',
    PRIVATE_KEY: "Coderkey",
    clientID:"Iv1.aa9f96cbd39f0d3e",
    clientSecret: '34db6a479de729d27a306384a3b722f26387ff18',
    callbackURL:'http://localhost:8080/api/sessions/githubcallback'

}

export default env;

