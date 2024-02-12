const indexApp = require('./app');
const connectDB = require('./db/connect')

const PORT = process.env.PORT || 4000;

connectDB()
.then(()=>{
   indexApp.listen(PORT, ()=>{
      console.log(`Server is listing on port ${PORT}`);
   })
})
.catch((err)=>{
   console.log("Error while listing port or DB Connection");
   
})

