import mongoose from "mongoose"

const activitySchema =
new mongoose.Schema({

    username : {
        type : String,
        required : true
    },

    action : {
        type : String,
        required : true
    },

    module : {
        type : String,
        required : true
    },

    time : {
        type : String,
        required : true
    }

},{
    timestamps : true
})

const Activity =
mongoose.model(
    "activity",
    activitySchema
)

export default Activity