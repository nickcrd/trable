import mongoose, {Schema, Document } from "mongoose";
import Location from "./Location";

export interface BLENode extends Document {
    displayName: string
    location: Location
    apiUserId: string
}

const BLENodeSchema: Schema = new Schema({
    displayName: { type: String , required: false },
    location: {
        x: { type: Number },
        y: { type: Number },
        z: { type: Number }
    },
    apiUserId: { type: Schema.Types.ObjectId, required: true }
});

export default mongoose.model<BLENode>("nodes", BLENodeSchema);