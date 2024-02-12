const modelMongoose = require('mongoose')

const URLSchema = new modelMongoose.Schema({
   shortnerID:{
      type:String,
      require:true,
      unique:true
   },
   urlShortner:{
      type:String,
      require:true,
      unique:true
   },
   originalURL:{
      type:String,
      require:true
   },
   history:[{timestamp:{type:Number}}]
},{timestamps:true})

const URLModel = modelMongoose.model("URL",URLSchema);
module.exports.URLModel =  URLModel