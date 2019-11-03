
const mongoose = require('mongoose'),
    Shema = mongoose.Schema,
    validator = require('validator');

const validateLocalStrategyEmail = function(email){
    return validator.isEmail(email,{ require_tld: false });
};

const UserSchema = new Shema({
    deviceID:{
        type: String,
        default: ''
    },
    email:{
        type: String,
        index:{
            unique: true,
            sparse: true
        },
        lowercase: true,
        trim: true,
        default: '',
        validate: [validateLocalStrategyEmail, 'Please fill a valid email address']
    },
    phoneNumber:{
        type: String,
        required: 'Please type your phone number',
        lowercase: true,
        trim: true
    },
    firstName: {
        type: String,
        required: 'Please fill in a first name',
        lowercase: true,
        trim: true
    },
    lastName: {
        type: String,
        required: 'Please fill in a last name',
        lowercase: true,
        trim: true
    },
    middleName:{
        type: String,
        required: 'Please fill in a middle name',
        lowercase: true,
        trim: true
    },
    registrationDate:{
        type: Date,
        default: Date.now
    },
    userAge:{
        type: Number,
        requred: 'Please enter user age'
    },
    petIDs:{
        type:[
            {
                type: String,
                default: ''
            }
        ],
        default:['']
    }
});

mongoose.model('User', UserSchema);