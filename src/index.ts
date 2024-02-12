const indexApp = require('./app');
const {connectDB} = require('./db/connect')

const PORT = process.env.PORT || 4001;

console.log("PORT", PORT)
connectDB()
.then(()=>{
   indexApp.listen(PORT, ()=>{
      console.log(`Server is listing on port ${PORT}`);
   })
})
.catch((err:any)=>{
   console.log("Error while listing port or DB Connection");
   
})

