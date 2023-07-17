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
    },
    getUserFriends: async (req,res)=>{
      try{
         
        const {id}=req.params;
        const user = await User.findById(id);
        if(!user){
          res.status(400).send("User doesn't exist");
        }

        const friends = await Promise.all(
          user.friends.map((id)=>{
            User.findById(id)
          })
        );
        const formattedFriends = friends.map(
          ({_id, firstName, lastName, occupation, location, picturePath})=>{
            return {_id, firstName, lastName, occupation, location, picturePath}
          }
        );
        res.status(200).json(formattedFriends); 
      }catch (err){
        res.status(404).json({message: err.message});
      }
    },
    addRemoveFriend: async (req,res)=>{
         try{
           const {id, friendId} = req.params;
           const user = await User.findById(id);
           const friend = await User.findById(friendId); 
        
           if(user.friends.includes(friendId)){
             user.friends = user.friends.filter((id)=>{
               id !== friendId  
             })
             friend.friends = friend.friends.filter((id)=>{
              id !== id  
            })
           }else{
            user.friends.push(friendId);
            friend.friends.push(id);
           }
           await user.save();
           await friend.save();
           
           const friends = await Promise.all(
            user.friends.map((id)=>{
              User.findById(id)
            })
          );
          const formattedFriends = friends.map(
            ({_id, firstName, lastName, occupation, location, picturePath})=>{
              return {_id, firstName, lastName, occupation, location, picturePath}
            }
          );
        res.status(200).json(formattedFriends); 
      }catch (err){
        res.status(404).json({message: err.message});
      }
    }
}