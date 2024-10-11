// import mongoose from 'mongoose';

// const listSchema = new mongoose.Schema({
//     title:{
//         type: String,
//         required: true,
//     },
//     body:{
//         type: String,
//         required: true,
//     },
//     user: [{
//         type: mongoose.Types.objectId,
//         ref:"User"
//     }]
// })

// export default mongoose.model("List",listSchema);
import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
    title: {
        type: String, // Ensure the type is defined
        required: true,
    },
    body: {
        type: String, // Ensure the type is defined
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, // Ensure this is defined correctly
        ref: 'User', // Ensure this matches the User model name
        required: true,
    },
}, { timestamps: true }); // Optional: adds createdAt and updatedAt fields

const List = mongoose.model('List', listSchema);

export default List;
