
const mongoose = require("mongoose")
const bannerSchema   = mongoose.Schema(
    {
        banner: {
            type: String,
            required: [true, "please enter Banner title"]
        },
    },
    {
        timestamps:true
    }
)
const Banner = mongoose.model("Banner",bannerSchema)
module.exports = Banner;