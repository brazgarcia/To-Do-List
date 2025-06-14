const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@to-do-list.q4naqjn.mongodb.net/?retryWrites=true&w=majority&appName=To-do-List",
      {
        useNewUrlParser: true, // Uso obsoleto 
        useUnifiedTopology: true, // Uso obsoleto 
      }
    )
    .then(() => console.log("MongoDB Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
