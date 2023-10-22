import mongoose from "mongoose";
const { Schema } = mongoose;
const productSchema = new Schema
    ({
        name:{
           type: String,
           required: true,
        },
        price:{
            type:String,
            required:true,
        },
        details:{
            type:String,
        },
        // frontPhoto: {
        //     type: String,
        //     require: true
        // },
        // backPhoto: {
        //     type: String,
        //     require: true
        // },
    },
        { timestamps: true }
    );
export default mongoose.model('Product', productSchema);