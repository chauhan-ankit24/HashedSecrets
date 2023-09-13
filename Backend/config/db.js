const mongoose = require('mongoose');
const colors = require("colors");

mongoose.set('strictQuery', false);

module.exports = connectDB => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Connected to MongoDB 🔥 ".cyan.bold))
        .catch((err) => console.log(`${err} 😫`.red.bold))
}