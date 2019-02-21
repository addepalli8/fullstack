const mongoose=require('mongoose');
const {Schema}=mongoose;

const recipientschema=new Schema({

    email:String,
    responded:{type:Boolean,default:false}
});

module.exports=recipientschema;