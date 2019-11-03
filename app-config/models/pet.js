const mongoose = require('mongoose'),
    Shema = mongoose.Schema;

const UserPetShema = new Shema({
    petName: {
        type: String,
        required: 'Please fill in a pet name',
        lowercase: true,
        trim: true
    },
    petAge:{
        type: Number,
        default: 1
    },
    petWeigh:{
        type: Number,
        default: 10
    },
    petHeight:{
        type: Number,
        default: 10
    },
    registrationDate:{
        type: Date,
        default: Date.now
    },
    breed:{
        type: String,
        default: 'new Breed'
    },
    masters:{
        type:[
            {
                type: String,
                default: ''
            }
        ],
        default:['']
    }
});

mongoose.model('UserPet', UserPetShema);