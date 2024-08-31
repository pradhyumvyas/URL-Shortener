const { nanoid } = require('nanoid');
const {URLModel} = require('../models/url.model.ts');

export const urlShortner = async(req:any,res:any,next:any)=>{
   if(!req.body.OriginalURL){
      return res
      .status(404)
      .json({
         'Error':"URL not found to short"
      })
   }

   const uniqueID = nanoid(8);

   try{
      const urlCreated = await URLModel.create({
         shortnerID:uniqueID,
         urlShortner:`pv.com/${uniqueID}`,
         originalURL:req.body.OriginalURL
      })
      console.log("URL Created", urlCreated)
      return res
      .status(200)
      .json({
         "success":"URL Shorten successfully",
         "response":urlCreated
      })
   }catch(err:any){
      console.log("Error", err)
      return res
      .status(401)
      .json({
         "Error":"Something went wrong, please try again"
      })
   }
}

export const originalURL = async(req:any, res:any, next:any)=>{
   console.log("Get URL", req.body, req.query);
   
   if(!req.body.urlID && !req.query.id){
      return res
      .status(404)
      .json({
         'Error':"Shortner URL not found"
      })
   }

   try {
      const getURL = await URLModel.findOneAndUpdate(
         {
            shortnerID:req.body.urlID || req.query.id
         },
         {
            $push:{
               history:{
                  timestamp:Date.now()
               }
            }
         }
      )
      return res.redirect(getURL.originalURL)
   } catch (error) {
      return res
      .status(401)
      .json({
         "Error":"Something went wrong, please try again"
      })
   }
}