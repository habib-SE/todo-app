import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    list: [{
        type: mongoose.Schema.Types.ObjectId,  // Corrected field type
        ref: "List"
    }]
});

export default mongoose.model("User", userSchema);  // Use export default
