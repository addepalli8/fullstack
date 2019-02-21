const mongoose=require('mongoose');
const {Schema}=mongoose;
const recipientschema=require('./recipient')

const surveySchema=new Schema({
    title:String,
    body:String,
    subject:String,
    recipients:[recipientschema],
    yes:{type:Number,default:0},
    no:{type:Number,default:0},
    _user:{type:Schema.Types.ObjectId,ref:'users'},
    datesent:Date,
    daterespnod:Date
});

mongoose.model('surveys',surveySchema);