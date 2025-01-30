const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        const con = await mongoose.connect('mongodb://localhost:27017/project0',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${connectDB.connection.host}`);
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
};

module.exports =connectDB;