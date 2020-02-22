const response = require('../model/response')
const { survey_db } = require('../db')

const setUser = (req,res) => {
    var data = req.body;
    survey_db.setUser(data).toArray(function(err,result){
        res.json(response({ success: true, payload: result }));
    });
}

module.exports = {setUser}




// [
//     {
//       "id": UUID(),
//       "survery_title": "Cooling System",
//       "remark": "all fine",
//       "active": 1,
//       "categories": [
//         {
//           "id": UUID(), "name": "Basic Information",
//           "questions": [
//             {
//               "id": UUID(), 
//               "name": "What is the type of your building?",
//               "qtype_id": 1,
//               "possible_answers":  [
//                 {"id": UUID(),"name": "Office Building"},
//                 {"id": UUID(),"name": "Hotel"}
//               ]
//             },
//             {
//               "id": UUID(),
//               "qtype_id": 2,
//               "name": "What is the total area of your building?",
//               "possible_answers": [
//                 {"id": UUID(),"name": "below 2000 sqm"},
//                 {"id": UUID(),"name": "2000-5000 sqm"}
//               ]
//             }, 
//             {
//                 "id": UUID(), 
//                 "name": "What is the age of your building?",
//                 "qtype_id": 2,
//                 "possible_answers": [
//                   {"id": UUID(),"name": "Less than 10 Years"},
//                   {"id": UUID(),"name": "10-20 Years"},
//                   {"id": UUID(),"name": "20-30 Years"},
//                   {"id": UUID(),"name": "30-40 Years"},
//                   {"id": UUID(),"name": "40-50 Years"},
//                   {"id": UUID(),"name": "More than 50 Years"},
//                 ]
//               },
//               {
//                 "id": UUID(),
//                 "qtype_id": 2,
//                 "name": "Do you have Building Management System (BMS) installed?",
//                 "possible_answers": [
//                   {"id": UUID(),"name": "Yes"},
//                   {"id": UUID(),"name": "No"}
//                 ]
//               },
//               {
//                 "id": UUID(), 
//                 "name": "What is the brand of your BMS?",
//                 "qtype_id": 2,
//                 "possible_answers": [
//                   {"id": UUID(),"name": "Siemens"},
//                   {"id": UUID(),"name": "Johnson Controls"},
//                   {"id": UUID(),"name": "Daikin"},
//                   {"id": UUID(),"name": "Mitsubishi"},
//                   {"id": UUID(),"name": "Haier"},
//                 ]
//               },
//               {
//                 "id": UUID(), 
//                 "name": "What is (are) your operational challenge(s) or future plan(s)?",
//                 "qtype_id": 1,
//                 "possible_answers": [
//                   {"id": UUID(),"name": "Chiller Refresh (chiller replacement or upgrade)"},
//                   {"id": UUID(),"name": "Building Energy Efficiency Optimization"},
//                   {"id": UUID(),"name": "Reducing Operating Expenses"},
//                 ]
//               }
//           ]  
//         },
//         {
//           "id": UUID(), "name": "ChillerInformation",
//           "questions": [
//             {
//                 "id": UUID(), 
//                 "name": "What is the brand of chiller #1?",
//                 "qtype_id": 6,
//                 "possible_answers": [
//                   {"id": UUID(),"name": "Daikin"},
//                   {"id": UUID(),"name": "York"},
//                   {"id": UUID(),"name": "Trane"},
//                   {"id": UUID(),"name": "Carrier"},
//                   {"id": UUID(),"name": "Haier"},
//                   {"id": UUID(),"name": "Johnson Controls"},
//                   {"id": UUID(),"name": "Ingersoll"}
//                 ]
//               },
//               {
//                 "id": UUID(),
//                 "qtype_id": 1,
//                 "name": "Please select the cooling rationale of chiller #1?",
//                 "possible_answers": [
//                   {"id": UUID(),"name": "Water-cooled Chiller"},
//                   {"id": UUID(),"name": "Air-cooled Chiller"}
//                 ]
//               },
//               {
//                 "id": UUID(),
//                 "qtype_id": 2,
//                 "name": "Do you have another chiller?",
//                 "possible_answers": [
//                   {"id": UUID(),"name": "Yes"},
//                   {"id": UUID(),"name": "No"}
//                 ]
//               },
//               {
//                 "id": UUID(),
//                 "qtype_id":6,
//                 "name": "What is the brand of chiller #2?",
//                 "possible_answers": [
//                     {"id": UUID(),"name": "Daikin"},
//                     {"id": UUID(),"name": "York"},
//                     {"id": UUID(),"name": "Trane"},
//                     {"id": UUID(),"name": "Carrier"},
//                     {"id": UUID(),"name": "Haier"},
//                     {"id": UUID(),"name": "Johnson Controls"},
//                     {"id": UUID(),"name": "Ingersoll"}
//                 ]
//               },
//               {
//                 "id": UUID(),
//                 "qtype_id": 1,
//                 "name": "Please select the cooling rationale of chiller #2?",
//                 "possible_answers": [
//                   {"id": UUID(),"name": "Water-cooled Chiller"},
//                   {"id": UUID(),"name": "Air-cooled Chiller"}
//                 ]
//               },
//           ]  
//         }
//       ],
//     }
//     ]