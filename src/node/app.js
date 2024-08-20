// const express = require('express');
// var cors = require('cors');
// var bodyParser = require('body-parser')
// const app = express();
// const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerUI = require('swagger-ui-express');
// const mongoose = require('mongoose');
// const { MONGO_URI } = require('./config');
// const routes = require('./routes/routes');
// const PORT = process.env.PORT || 8000;
// //BodyParser Middleware
// app.use(express.json());
// bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
// //connect to MongoDB
// mongoose.set('debug', true);
// mongoose.connect(MONGO_URI, {}).then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err))
// // async function test() {
// //     await mongoose.connect(MONGO_URI);
// // }

// mongoose.connection.on('open', () => {
//     console.log('open fire');
// });

// mongoose.connection.on('connected', () => {
//     console.log('connected successfully');
// });
// mongoose.Promise = global.Promise;

// const swaggerOptions = {
//     swaggerDefinition: {
//         openapi: '3.0.0',
//         info: {
//             title: "API Localização de Serviço",
//             version: '1.0.0',
//             description: "Mr.Cheng"
//         },
//     },
//     apis: ['./routes/routes.js', './models/*.js'],
// };
// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use(cors())
// app.use('/localservapi', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
// //User routes
// app.use('/', routes);
// app.listen(PORT, () => console.log(`Server run at port ${PORT}`));

// Require mongoose module 
const mongoose = require('mongoose'); 
  
// Set Up the Database connection 
mongoose.connect( 
    'mongodb://root:exemplo@mongo:27017/', {}) 
  
// Defining User schema 
const userSchema = new mongoose.Schema( 
    { name: String, age: Number } 
) 
  
// Defining User model 
const User = mongoose.model('User', userSchema); 
  
// Create collection of Model 
User.createCollection().then(function (collection) { 
    console.log('Collection is created!'); 
});