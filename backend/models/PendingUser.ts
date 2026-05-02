import mongoose from "mongoose";
import { IPendingUser } from "../interfaces/IPendingUser";

const pendingUserSchema = new mongoose.Schema<IPendingUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: String, required: true },
  otpExpires: { type: Date, required: true },
});

export const PendingUser = mongoose.model<IPendingUser>(
  "PendingUser",
  pendingUserSchema
);