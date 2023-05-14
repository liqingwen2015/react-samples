const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://msonline123:test123456@msonline.menjs.mongodb.net/expense-tracker',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.on('error', (err) => console.log(err));
connection.on('open', () => console.log('MongoDB open'));
connection.on('connected', () => console.log('MongoDB connected'));