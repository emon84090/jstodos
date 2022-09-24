const mongoose = require('mongoose');

const userSchema = ({
    name: {
        type: String,
        required: [true, "name must be required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "email must be required"],
        trim: true
    },
    phone: {
        type: String,
        required: [true, "phone must be required"],
        trim: true
    },
    country: {
        type: String,
        required: [true, "country must be required"],
        trim: true
    }
})


module.exports = mongoose.model("jstodos", userSchema);