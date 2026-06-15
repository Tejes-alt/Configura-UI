import mongoose from "mongoose"

import dotenv from "dotenv"

dotenv.config()

const DBURL = process.env.DBURL

export async function connectDB() {

    try {

        await mongoose.connect(DBURL)

        console.log(
            "MongoDB Atlas Connected"
        )

    } catch(error) {

        console.log(
            "MongoDB Error:",
            error.message
        )
    }
}