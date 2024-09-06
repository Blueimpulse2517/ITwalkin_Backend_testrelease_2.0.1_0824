const mongoose=require("mongoose")

const AdminSchema = new mongoose.Schema({
    email:{
        type:String,
        unique: true

    },
    password:{
        type:String
    },
    isSuperAdmin:{
        type:Boolean
    }
})
const  AdminModel = mongoose.model("Admin",AdminSchema )

module.exports=AdminModel





