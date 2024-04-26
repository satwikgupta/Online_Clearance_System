const mongoose = require('mongoose');

mongoose
    .connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...', mongoose.connection.name))
    .catch(err => console.log(err));