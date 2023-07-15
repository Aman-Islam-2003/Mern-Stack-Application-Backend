import User from "../models/User";

module.exports = {
    getUser: async (req,res)=>{
      try{
        const {id} = req.params;
        const user = await User.findById(id);
        if(!user){
            res.status(400).send("User doesn't exist");
        }

        res.status(200).json(user);

      }catch (err){
        res.status(404).json({message: err.message});
      }
    }
}