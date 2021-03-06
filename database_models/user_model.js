const mongoose = require("mongoose");
const shortid = require("shortid"); // generates unique member id for user

var userProfileSchema = mongoose.Schema({
    location:    {type: String, default: "None"},
    description: {type: String, default: "None"},
    interests:   {type: String, default: "None"},
    profile_pic: {type: String, default: "default_profile.png"},
})

var userSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    member_id: {type: String, default: shortid.generate},
    friends: [{
        "member_id": String,
        "friends_name": String,
        "profile_pic": String
    }],
    friend_request: [{
        "member_id": String,
        "friends_name": String,
        "profile_pic": String
    }],
    user_profile: [userProfileSchema]
})

var User = mongoose.model("User", userSchema);

// Allows us to use in rest of app
module.exports = User;