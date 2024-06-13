// create an express app
const express = require("express")
const app = express()

port = process.env.PORT || 3000
// use the express-static middleware
app.use(express.static("public"))

// start the server listening for requests
app.listen(port,
	() => console.log(`Server is running on port ${port}.`));
