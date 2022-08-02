const mongoose = require('mongoose');

// make sure its the name of the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/surf-shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
