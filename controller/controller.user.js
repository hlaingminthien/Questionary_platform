const response = require('../model/response')
const { survey_db } = require('../db')

const setUser = (req,res) => {
    var data = req.body;
    survey_db.setUser(data).toArray(function(err,result){
        res.json(response({ success: true, payload: result }));
    });
}

module.exports = {setUser}