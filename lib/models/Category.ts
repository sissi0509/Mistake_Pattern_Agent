import mongoose, { Schema, Document } from "mongoose";

export interface IMisconceptionPattern {
  pattern: string;
  explanation: string;
  howToFix: string;
  updatedAt: Date;
}

export interface ICategory extends Document {
  subjectId: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  mistakeCount: number;
  misconceptionPattern?: IMisconceptionPattern;
  createdAt: Date;
}

const MisconceptionPatternSchema = new Schema<IMisconceptionPattern>({
  pattern: { type: String, required: true },
  explanation: { type: String, required: true },
  howToFix: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

const CategorySchema = new Schema<ICategory>({
  subjectId: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
  name: { type: String, required: true },
  description: { type: String },
  mistakeCount: { type: Number, default: 0 },
  misconceptionPattern: { type: MisconceptionPatternSchema },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Category ||
  mongoose.model<ICategory>("Category", CategorySchema);
