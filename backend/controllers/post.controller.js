import Post from "../models/post.model.js";

export const createBlog = async(req,res)=>{
    try{
        const {title, content, categories} = req.body;

        if(!title||!content||!categories){
            return res.status(400).json({message:"Title, content and categories are required"});
        }

        const newPost = new Post({
            title,
            content,
            categories,
            author: req.user._id // from protectRoute middleware
        });

        const savedPost = await newPost.save()

        return res.status(201).json({
            message: "post created sucessfully",
            post: savedPost
        })
   }catch(error){
    return res.status(500).json({message:"Internal server error"});
   }
}