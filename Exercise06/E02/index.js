const express = require("express");
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json())

let users = 
[
  { 'id':'1', 'name':'Kirsi Kernel' },
  { 'id':'2', 'name':'Matti Mainio' }
]

// Create a logger middleware function
const logger = (req, res, next) => {
    const date = new Date();
    const lDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    const log = `${lDate}: ${req.method} ${req.url}\n`;
    console.log(log);
  
    // Append the log to a text file
    fs.appendFile('request_logs.txt', log, (err) => {
      if (err) {
        console.error('Error writing to the log file:', err);
      }
    });
  
    next();
  };

// Use the logger middleware for all routes
app.use(logger);


// Root folder
app.get("/", (req, res) => {
    res.send("Hello from the server-side!")
    console.log("Root page")
})

// Get all users
app.get('/users', (request, response) => {
    response.json(users)
  })

// Get one user
app.get('/users/:id', (request, response) => {  
    const { id } = request.params
    const user = users.find(user => user.id === id)
    // check if user exists or return 404
    if (user) response.json(user)
    else response.status(404).end()
  })

// Delete one user
app.delete('/users/:id', (request, response) => {
    const { id } = request.params
    users = users.filter(user => user.id !== id)
    // Just send "204 no content" status code back
    response.status(204).end()
  })

  // update user data
app.put('/users/:id', (request, response) => {
    //const id = request.params.id
    const { id } = request.params
    // const name = request.query.name
    const { name } = request.query
    const user = users.find(user => user.id === id)
    if (user) {
      user.name = name
      response.status(200).end()
    } else {
      response.status(204).end()
    }
  })

// create a new user
app.post('/users/', (request, response) => {
    const maxId = Math.max(...users.map(user => user.id), 0)
    const user = request.body
    user.id = (maxId+1).toString() 
    users = users.concat(user) 
    response.json(user)
  })

  
app.listen(port, () => {
    console.log("Example app, listening on port 3000")
})