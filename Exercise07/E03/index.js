const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())

// -------------------MONGOOSE Config-----------------

// using mongoose
const mongoose = require("mongoose");

// connection string
const mongoDB = 'mongodb+srv://andreaskjersheim:akjmongodb%23555@kjersheimmongodbcluster.mraxrlj.mongodb.net/E07UserDB?retryWrites=true&w=majority'

// connecting mongodb
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

// check connection - ok or error
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log("Database test connected")
})

// -------------------MONGOOSE Schema / Model-----------------
// new schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 0},
  role: { type: String},
  id: { type: Number, min: 0}
})

// new model
const User = mongoose.model('User', userSchema, 'users')

// -------------------ROUTES-----------------
// -----Get----- get all user data
app.get("/users", async (request, response) => {
  try {
    const users = await User.find({});
    // Sending the json data to the page
    response.json(users);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
});
// -----Get----- get one users data
app.get('/users/:id', async (request, response) => {
  try {
    const user = await User.findById(request.params.id)
    if (user) response.json(user)
    // User with the given ID was not found/404
    else response.status(404).end()
  // Server error
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error' });
  }
});
// -----Post---- create a new user
app.post('/users', async (request, response) => {
  // Get the data from request
  const { name, age, role, id } = request.body;
  // Create a new user
  const user = new User({
    name: name,
    age: age,
    role: role,
    id: id
  });
  // Save the user to the database
  // using the save() method inside a try/catch to catch errors
  try {
    const savedUser = await user.save(); 
    response.json(savedUser);
  // Server error
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
});

//-----Delete----- delete one users data
app.delete('/users/:id', async (request, response) => {
  try {
    //extract id parameter from the url
    const { id } = request.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser) {
      // if deletedUser is true, user was found and deleted, sending a 204 that indicate a successful
      // response and there is no content to send back.
      response.status(204).end();
    } else {
      // User with the given ID was not found/404
      response.status(404).end();
    }
  // Server error
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
});
// -----PUT----- Update one user's data
// I did notice this was not mentioned in the exercise information however I wanted to add it as the last point as I
// figured it might be handy for the next sections
app.put('/users/:id', async (request, response) => {
  try {
    // extract id parameter from the url
    const { id } = request.params;
    // fetches the body data
    const updateData = request.body;

    // Find the user by ID and update the provided data from request.body
    // Use { new: true } to return the updated user
    const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });

    // if deletedUser is true, user was found and deleted, sending a 204 that indicate a successful
      // response and there is no content to send back.
    if (updatedUser) {
      response.json(updatedUser);
    } else {
      // User with the given ID was not found/404
      response.status(404).end();
    }
  // Server error
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
});
// Reading/Get Root folder
app.get("/", (request, response) => {
    response.send("Root page - Please navigate to /users for more info")
    console.log("Root page")
})

// -------------------localhost listening-----------------
  app.listen(port, () => {
    console.log("Example app, listening on port 3000")
})