// importing modules http and fs, as well as declaring and initializing hostname and port
const http = require("http")
const fs = require("fs")
const hostname = "127.0.0.1"
const port = 3000

// Declaring and initializing a counting variable to count the requests later. 
let counter = 0;

// Creating the server
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // if the request url is to the root folder "/"" adding 1 to the counter variable.
        counter++;

        // storing the count in a textfile, which it overwrites every time I restart the application
        fs.writeFile("counter.txt", counter.toString(), (error) => {
            if (error){
                console.log("There was an error writing to the file: ")
            }else {
                console.log("File written successfully\n");
            }
        });
        // Respond with the request count
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Request counter value is ${counter}`);
    } else {
        // For any other URL added, i.e. "http://localhost:3000/hei.html"
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

// Starting the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });


  // When I started Exercise 6 I mistakenly installed a new package.json in this directory. I edited and tested it so hopefully it would be ok.
  // Lesson to self, use the terminal to navigate properly on each exercise