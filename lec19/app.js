const express = require('express');
const app = express();
app.use(express.json());


const handleGetRequests = (req, res) => {
    // res.send("<p>Hello World!</p>");

    res.status(200).json({
        "status": "success",
        "data": "Hello world!"
    })};

const handlePostRequest =   (req, res) => {
    // req.body;
    // res.send("<p>Created something new!</p>");

    res.status(200).json({
        "status": "success",
        "data": req.body
    })};

const handleDeleteRequest =  (req, res) => {
    // req.body;
    // res.send("<p>Created something new!</p>");

    
    res.status(200).json({
        "status": "success",
        "data": `ID = ${req.params.id}`
    })
};

// //Handling GET requests
// app.get("/", handleGetRequests());

// //Handle POST requests
// app.post("/", handlePostRequest());

//Handle DELETE request
app.delete("/:id", handleDeleteRequest());

app.route("/")
.get(handleGetRequests)
.post(handlePostRequest);

app.listen(8000, "localhost", ()=>{
    console.log("Listening on 8000");
})