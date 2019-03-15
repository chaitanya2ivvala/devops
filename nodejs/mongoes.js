var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var personSchema = new Schema({
    name: {
      first: String,
      last: String
    }
  });

  // compile our model
  var Person = mongoose.model('Person', personSchema);

  // create a document
  var axl = new Person({
    name: { first: 'Axl', last: 'Rose' }
  });
  var axl1 = new Person({
    name: { first: 'Axl', last: 'Rose' }
  });
  console.log(axl);
  console.log(axl1);