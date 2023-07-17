import {Post} from "../models/Post";
import {User} from "../models/User"; 

module.exports = {
    createPost: async (req,res)=>{
        try{
            const {userId, description, picturePath}=req.body;
            const user = await User.findbyId(userId);
            const newPost = new Post({
                userId,
                firstName: user.firstName,
                lastName:user.lastName,
                location:user.location,
                description,
                userPicturePath: user.picturePath,
                picturePath,
                likes:{},  
                comments:[]
            })
            await newPost.save();
            const post = await Post.find();//grabbing all the posts
            res.status(201).json(post);
        }catch (err){
        res.status(409  ).json({message: err.message});
      }
    },
    getFeedPosts: async(req,res)=>{
        try{
            const post = await Post.find();//grabbing all the posts
            res.status(200).json(post);
        }catch (err){
        res.status(404).json({message: err.message});
      }
    },
    getUserPosts:  async(req,res)=>{
        try{
           const {userId} = req.params;
           const post = await Post.find({userId});
            res.status(200).json(post);
        }catch (err){
        res.status(404).json({message: err.message});
      }
    },
    likePost:  async(req,res)=>{
        try{
           const {id} = req.params;
           
            res.status(200).json(post);
        }catch (err){
        res.status(404).json({message: err.message});
      }
    },
}