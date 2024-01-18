const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const multer = require("multer")
const path=require("path")
const cookieParser = require("cookie-parser")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const commentRoute = require("./routes/comments") 


const app = express()


// database
const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully");
    } catch (error) {
        console.log(error.message);
    }
}

dotenv.config()

// middlewares

app.use(express.json())
app.use("/", (req, res) => {
    res.json("hello")
})
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(cors({origin:"https://blog-app-seven-hazel.vercel.app",credentials:true}))
app.use(cookieParser())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/comments", commentRoute)


// image upload

const storage=multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
        // fn(null,"hanzala.jp.jpg")
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    // console.log(req.body)
    res.status(200).json("Image uploaded successfully!")
})



app.listen(process.env.PORT, () => {
    connectDb()
    console.log("app is running on port " +process.env.PORT);
})
