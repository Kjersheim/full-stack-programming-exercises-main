const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// CORS - allow connection from different domains and ports
app.use(cors());

// convert json string to json object (from request)
app.use(express.json());

// MONGODB/MONGOOSE -  Connection String, Mongoose connection
const mongoose = require('mongoose');
const mongoDB =
  'mongodb+srv://andreaskjersheim:akjmongodb%23555@kjersheimmongodbcluster.mraxrlj.mongodb.net/E08ToDo?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database test connected');
});

// MONGOOSE SCHEMA & MODEL
// schema
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

// model
const Todo = mongoose.model('Todo', todoSchema, 'todos');

// ROUTES
app.post('/todos', async (request, response) => {
  const { text } = request.body;

  if (!text) {
    // Handle the case where the text is empty
    response.status(400).json({ error: 'Text is required for a todo.' });
    return;
  }

  const existingTodo = await Todo.findOne({ text });

  if (existingTodo) {
    // Handle the case where a duplicate todo is being added
    response.status(400).json({ error: 'Todo already exists.' });
    return;
  }

  const todo = new Todo({
    text: text,
  });
  const savedTodo = await todo.save();
  response.json(savedTodo);
});

app.get('/todos', async (request, response) => {
  const todos = await Todo.find({});
  response.json(todos);
});

app.get('/todos/:id', async (request, response) => {
  const todo = await Todo.findById(request.params.id);
  if (todo) response.json(todo);
  else response.status(404).end();
});

app.delete('/todos/:id', async (request, response) => {
  const deletedTodo = await Todo.findByIdAndRemove(request.params.id);
  if (deletedTodo) response.json(deletedTodo);
  else response.status(404).end();
});

// App listens to the port specified above, 3000
app.listen(port, () => {
  console.log('Example app listening on port 3000');
});
