const mongoose = require ('mongoose');



const { Schema } = mongoose;

const blogSchema = new Schema({
    is_active:{
        type: Boolean,
        default: true
    },
    title:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now(),
    },
    author:{
        type: String,
        required: true
    },
},
{
    timestamps: true,
    versionKey : false,
}
);


const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;