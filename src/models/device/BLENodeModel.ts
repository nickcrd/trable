import mongoose, {Schema, Document } from "mongoose";
import Location from "./Location";

export interface BLENode extends Document {
    displayName: string
    location: Location
    apiUserId: string
}

const BLENodeSchema: Schema = new Schema({
    displayName: { type: String , required: false },
    location: { type: Map, required: true },
    apiUserId: { type: Schema.Types.ObjectId, required: true }
});

export default mongoose.model<BLENode>("nodes", BLENodeSchema);