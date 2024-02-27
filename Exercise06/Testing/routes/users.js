// Routes are run top to bottom!

const express = require("express");
const router = express.Router()

// can define the function to work on all routes
router.use(logger)

// Cutting off the /users path as i added all routers will have that path
router.get("/",(req,res) => {
    res.send("User List")
    console.log(req.query.name) // writing the query in the console, after i write localhost/3000/users?name=andreas
})

router.get("/new", (req,res) => {
    res.render("users/new")
})

//This wont work unless i add app.use(express.urlencoded()) middleware
router.post("/", (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({ firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    }else{
        console.log("Error: not valid")
        // if isValid = false it renders the users/new page again and adds the written firstname text we wrote in the input box back in the box
        res.render("users/new", { firstName: req.body.firstName})
    }


    // console.log(req.body.firstName)
    // res.send("hi")
    //res.send("Create User")
})

router.route("/:id")
.get((req, res) => {
    console.log(req.user)
    res.send(`Get user with ID ${req.params.id}`)
})
.put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`)
})
// The above does the same as the under!
// router.get("/:id", (req, res) => {
//     res.send(`Get user with ID ${req.params.id}`)
// })

// router.put("/:id", (req, res) => {
//     res.send(`Update user with ID ${req.params.id}`)
// })

// router.delete("/:id", (req, res) => {
//     res.send(`Delete user with ID ${req.params.id}`)
// })

const users = [{ name: "Andreas"}, { name: "Tiia"}, { name: "Minni"}]
router.param("id", (req,res,next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router;