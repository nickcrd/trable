import mongoose, { Schema, Document } from "mongoose";
import {TrableEntityType} from "./TrableEntityType";

export interface TrableApiUser extends Document, Express.User {
    entityType: TrableEntityType
    permissions: string[]
    tokenLastIssued: number
}

export const TrableApiUserSchema: Schema = new Schema({
    entityType: { type: String , required: true },
    permissions: { type: Array, required: true },
    tokenLastIssued: { type: Number, required: true }
});

export default mongoose.model<TrableApiUser>("apiUsers", TrableApiUserSchema, "api_users")