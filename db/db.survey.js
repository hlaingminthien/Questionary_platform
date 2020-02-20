const MongoClient = require('mongodb').MongoClient,format = require('util').format;
const uri = "mongodb://localhost:27017";
require('dotenv').config();

MongoClient.connect(uri,{useUnifiedTopology: true},function(err,client){
    db = client.db(process.env.DB_NAME);
})

const getQuestion = () => {
    return db.collection("survey").find({});
}

const setUser = (data) => {
    db.collection("forshow_user").insertOne(data);
    return db.collection("forshow_user").find(data);
}

module.exports = {
    getQuestion, setUser
}