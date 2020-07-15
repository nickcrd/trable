import mongoose, { Schema, Document } from "mongoose";
import Location from "./Location";
import { TrableApiUser, TrableApiUserSchema } from "./auth/TrableApiUserModel";

export interface BLENode extends Document {
    displayName: string
    location: Location
    apiUser: TrableApiUser
}

const BLENodeSchema: Schema = new Schema({
    displayName: { type: String , required: false},
    location: { type: Map, required: true },
    apiUser: TrableApiUserSchema
});

export default mongoose.model<BLENode>("nodes", BLENodeSchema);