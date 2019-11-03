
const mongoose = require('mongoose'),
    Shema = mongoose.Schema;

const FamilyShema = new Shema({
    ownerID:{
        type: String,
        default: ''
    },
    familyName:{
        type: String,
        default: ''
    },
    registrationDate:{
        type: Date,
        default: Date.now
    },
    membersIDs:{
        type:[
            {
                type: String,
                default: ''
            }
        ],
        default:['']
    }
});

mongoose.model('Family', FamilyShema);