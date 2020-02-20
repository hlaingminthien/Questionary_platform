const response = require('../model/response')
const { survey_db } = require('../db')

const getQuestion = (req,res) => {
    survey_db.getQuestion().toArray(function(err,result){
        res.json(response({ success: true, payload: result }));
        })
}

module.exports = {getQuestion}