const connectMongo = require('mongoose');

export const connectDB = async()=>{
   try {
      const connection = await connectMongo.connect(`${process.env.MONGO_URL}/${process.env.DB_NAME}`);
      console.log("Server is connected to DB", connection)
   } catch (error) {
      console.log("Error while coonecting to DB", error);
            
   }
}

