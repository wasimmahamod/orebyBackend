const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
 fname:{
    type:String,
    required:true,
 },
 lname:{
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
 telephone:String,
 postcode:String,
 state:String,
 country:String,
 verifed:{
   type:Boolean,
   default:false
 }
});

module.exports= mongoose.model("User",userSchema)