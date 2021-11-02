//requireing packages
const mongoose = require('mongoose');

//Database coonection
mongoose.connect('mongodb+srv://archana:archana@diwali.3xexs.mongodb.net/diwali?retryWrites=true&w=majority');

//schema definition
const Schema = mongoose.Schema;

const mSchema = new Schema({
    name : String,
    fname : String,
    email : String,
   
});


//Model creation
var msgdata = mongoose.model('msgdata',mSchema);
 
module.exports = msgdata;
