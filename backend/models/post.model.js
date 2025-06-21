import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    categories: [{
        type: String,
        enum: ["Tech", "Food", "Health", "Lifestyle", "Fashion", "Art"],
        required: true
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
        required: true
    }
}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);
export default Post;
