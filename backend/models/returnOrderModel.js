import mongoose from "mongoose";

const returnOrderSchema = new mongoose.Schema({
    choice: { type: String, enum: ["refund", "exchange"], required: true }, // Ensuring it's either 'refund' or 'exchange'
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    reason: { type: String, required: true },
    userId: { type: String, required: true },  // Storing userId as a string
    status: { type: String, enum: ["Pending", "Approved", "Rejected"], default: "Pending" }, // Default status is 'Pending'
    customerName: { type: String, required: true },  
    mobileNumber: { type: String, required: true },  
    address: { 
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipcode: { type: String, required: true },
        country: { type: String, required: true }
    }
}, { timestamps: true });

const returnOrderModel = mongoose.model("ReturnOrder", returnOrderSchema);

export default returnOrderModel;
