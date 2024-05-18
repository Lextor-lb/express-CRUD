const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
	.connect(
		"mongodb+srv://lextor:asdffdsa@crud.7lgwf4t.mongodb.net/Node-API?retryWrites=true&w=majority&appName=crud"
	)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log(err));

// Middleware
app.use(bodyParser.json());

// Import routes
const contacts = require("./routes/contacts");
app.use("/api/contacts", contacts);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
