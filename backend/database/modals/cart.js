import mongoose from "mongoose";
 const { Schema } = mongoose;
 const userSchema = new Schema({
    _id: ObjectId,         
    user_id: ObjectId,     
    items: [
      {
        product_id: ObjectId,
        category_id:Number,   
        quantity: Number,       
        price: Number,         
        name: String,          
        description: String,  
        image_url: String,    
      }
    ],
    created_at: Date,     
    updated_at: Date     
  });

 export default mongoose.model('User', userSchema);