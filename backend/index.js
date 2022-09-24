const express = require('express');
const mongoose = require('mongoose');
const jstodo = require("./routes/jstodo.route");
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json())

mongoose.connect(`mongodb://localhost:27017/todos`)
    .then((val) => console.log("connect successfull"))
    .catch((err) => console.log("faild to connect"))



app.get("/", (req, res) => {
    res.send("js todo server is running")

})

app.use("/todo", jstodo)

app.listen(PORT, () => {
    console.log(`your server is running on ${PORT}`);
})