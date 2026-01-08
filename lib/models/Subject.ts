import mongoose, { Schema, Document } from "mongoose";

export interface IOverallPattern {
  summary: string;
  topWeaknesses: string[];
  commonRootCauses: string[];
  adviceForImprovement: string;
  updatedAt: Date;
}

export interface ISubject extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  icon?: string;
  totalMistakes: number;
  overallPattern?: IOverallPattern;
  createdAt: Date;
}

const OverallPatternSchema = new Schema<IOverallPattern>({
  summary: { type: String, required: true },
  topWeaknesses: [{ type: String }],
  commonRootCauses: [{ type: String }],
  adviceForImprovement: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

const SubjectSchema = new Schema<ISubject>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  description: { type: String },
  icon: { type: String, default: "📚" },
  totalMistakes: { type: Number, default: 0 },
  overallPattern: { type: OverallPatternSchema },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Subject ||
  mongoose.model<ISubject>("Subject", SubjectSchema);
