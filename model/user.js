const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
 fullname:{
    type:String,
    required:true,
 },

 email:{
    type:String,
    required:true,
 },
 password:{
    type:String,
    required:true,
 },
 addressOne:{
    type:String,
 },
 addressTwo:{
    type:String,
 },
 created:{
   type:Date,
   default:Date.now()
 },
 telephone:String,
 postcode:String,
 state:String,
 country:String,
 verifid:{
   type:Boolean,
   default:false
 },
 merchant:{
   type:Boolean,
   default:false
 },
 avatar:{
   type:String,
 },
 role:{
   type:String,
   default:'member',
   enum:['member','admin','merchant']
 },
 update:{
   type:Date,

 },
 otp:{
  type:String,
},
 facebookid:String,
 linkdin:String,
});

module.exports= mongoose.model("User",userSchema)