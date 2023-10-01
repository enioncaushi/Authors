const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost/productManager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Failed to connect to MongoDB", err));

require('./routes/author.routes')(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
