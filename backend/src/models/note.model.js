import mongoose, { mongo, Schema } from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    tags:{
        type:[
            String
        ]  
    },
    sessionId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Session"
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
}, { timestamps: true,
    toJSON: { virtuals: true }
})

noteSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

export const Note = mongoose.model("note", noteSchema);