const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/e-commerce', {
  serverSelectionTimeoutMS: 5000 // optional but recommended
})




