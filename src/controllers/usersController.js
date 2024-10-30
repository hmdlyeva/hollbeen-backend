const Users = require("../models/userModel");
require("dotenv").config();

const getAllUsers = async (req, res) => {
  let AllUser = await Users.find({});
  res.send(AllUser);
};

const getUserByID = async (req, res) => {
  let id = req.params.id;
  let FindUser = await Users.findOne({ _id: id });
  res.send(FindUser);
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  let FindUserAndDelete = await Users.findByIdAndDelete({ _id: id });
};

const postNewUser = async (req,res)=>{
    let FindUser = await Users.findOne({nickname:req.body.nickname})
    if(FindUser){
        res.send("this nickname already in use!")
    }
    else{
        const NewUser = new Users(req.body)
        NewUser.save()
    }
}

const updatePatchUser = async (req,res)=>{
    let id = req.params.id;
    let UpdatedUser = await Users.findOneAndUpdate({_id:id},req.body)
}

const updatePutUser = async (req,res)=>{
    let id = req.params.id;
    let UpdateUser = await Users.replaceOne({_id:id},req.body)
}

module.exports = { getAllUsers, getUserByID ,deleteUser,postNewUser,updatePatchUser,updatePutUser};