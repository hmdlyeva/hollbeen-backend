const Rooms = require("../models/roomModel");
require("dotenv").config();

const getAllRooms = async (req, res) => {
  let AllRooms = await Rooms.find({});
  res.send(AllRooms);
};

const getRoomByID = async (req, res) => {
  let id = req.params.id;
  let FindRoom = await Rooms.findOne({ _id: id });
  res.send(FindRoom);
};

const postNewRoom = async (req,res)=>{
    let FindRoom = await Rooms.findOne({roomId:req.body.roomId})
    if(FindRoom){
        res.send("this roomId already in use!")
    }
    else{
        const NewRoom = new Rooms(req.body)
        NewRoom.save()
    }
}

const updatePatchRoom = async (req,res)=>{
    let id = req.params.id;
    let UpdatedRoom = await Rooms.findOneAndUpdate({_id:id},req.body)
}

const updatePutRoom = async (req,res)=>{
    let id = req.params.id;
    let UpdateRoom = await Rooms.replaceOne({_id:id},req.body)
}

module.exports = { getAllRooms, getRoomByID,postNewRoom,updatePatchRoom,updatePutRoom};