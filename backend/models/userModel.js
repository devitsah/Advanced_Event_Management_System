const mongoose= require("mongoose");
const validator=require("validator");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const crypto=require("crypto");
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please Enter your Name"],
        maxLength:[30,"Name cannot exceed 30 characters"],
        minLength:[4,"Name should have more than 4 characters"]
    },
    email:{
        type:String,
        required:[true,"Please Enter your Email"],
        unique:true,
        validate:[validator.isEmail,"Please enter a valid email"],
       
    },
    password:{
        type:String,
        required:[true,"Please Enter your Password"],
        minLength:[8,"Password should be greater than 8 characters"],
        select:false,
    },
    avatar:{
        public_id:
        {  type:String,
             required:true
            },
       url:{ type:String,
        required:true}   
    },
    role:{
        type:String,
        required:[true,"Please Enter your Role"],
      //  enum:["user","admin"],
        default:"user",
    },
    createdat: {
        type: Date,
        default: Date.now,
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
    
});

//password hashing
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password= await bcrypt.hash(this.password,10);

});
//JWT TOKEN
userSchema.methods.getJWTToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{
      expiresIn:process.env.JWT_EXPIRE,
    });
    return token;
}
//compare password
userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}




//Genrerating password Reset token
userSchema.methods.getResetPasswordToken=function(){
    //Genrating token
    const resetToken=crypto.randomBytes(20).toString("hex");
    //hashing and adding resetpassword token to userSchema
    this.resetPasswordToken=crypto
     .createHash("sha256")
     .update(resetToken)
     .digest("hex");
     this.resetPasswordExpire=Date.now()+15*60*1000;
     return resetToken;
    
}

module.exports=mongoose.model("User",userSchema);