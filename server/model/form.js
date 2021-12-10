const mongooose = require('mongoose');

const formSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required:true
    },
    price: {
        type: String,
        required:true
    },
    rating: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required:true
    }
})

const Form = mongooose.model('FORM', formSchema);
module.exports= Form;