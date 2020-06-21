import mongoose, { Schema, Document } from "mongoose";
import {TrableEntityType} from "./TrableEntityType";

export interface TrableApiUser extends Document {
    entityType: TrableEntityType
    permissions: string[]
    tokenLastIssued: number
}

export const TrableApiUserSchema: Schema = new Schema({
    entityType: { type: String , required: true },
    permissions: { type: Array, required: true },
    tokenLastIssued: { type: Number, required: false }
});

export default mongoose.model<TrableApiUser>("apiUsers", TrableApiUserSchema, "api_users");