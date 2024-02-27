const express = require("express");
const app = express();

app.use(express.static("public"))
app.use(express.urlencoded( { extended: true}))
// app.use(express.json()) allowing to parse json information from the body

app.set("view engine", "ejs");

const userRouter = require("./routes/users")

app.use("/users", userRouter)




app.listen(3000)


// middleware also goes top to bottom, define it at the top - unless you want it to be used on individual endpoints
//app.use(logger)

// // under the logger function will only run on get to /, can also run logger or any other function many times or several functions
// app.get("/",logger, (req, res) => {
//     console.log("Here")
//     //res.status(500).json({ message: "error"})
//     //res.json({ message: "Success"})
//     //res.download("index.js")
//     res.render("index", { text: "world"})
// })

// const userRouter = require("./routes/users")
// //const postsRouter = require("./posts")


// app.use("/users", userRouter)
// //app.use("/posts", postRouter)

// function logger(req, res, next) {
//     console.log(req.originalUrl)
//     next()
// }

