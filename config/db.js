const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

// IP address (191.204.210.245)
// igormsousa2003
// O9YoK5JDQqoHv5Aq
// mongodb+srv://igormsousa2003:<db_password>@ecommercetechims.l1qkv.mongodb.net/?retryWrites=true&w=majority&appName=EcommerceTechIms