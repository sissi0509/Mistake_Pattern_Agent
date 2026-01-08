import mongoose, { Schema, Document } from "mongoose";

export interface IMistake extends Document {
  subjectId: mongoose.Types.ObjectId;
  categoryId?: mongoose.Types.ObjectId;
  problemTitle: string;
  problemUrl?: string;
  problemDescription: string;
  userAnswer: string;
  correctAnswer?: string;
  aiAnalysis: {
    whatWentWrong: string;
    whyItHappened: string;
    rootCause: string;
    suggestedCategory: string;
  };
  createdAt: Date;
}

const AiAnalysisSchema = new Schema({
  whatWentWrong: { type: String, required: true },
  whyItHappened: { type: String, required: true },
  rootCause: { type: String, required: true },
  suggestedCategory: { type: String, required: true },
});

const MistakeSchema = new Schema<IMistake>({
  subjectId: { type: Schema.Types.ObjectId, ref: "Subject", required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
  problemTitle: { type: String, required: true },
  problemUrl: { type: String },
  problemDescription: { type: String, required: true },
  userAnswer: { type: String, required: true },
  correctAnswer: { type: String },
  aiAnalysis: { type: AiAnalysisSchema },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Mistake ||
  mongoose.model<IMistake>("Mistake", MistakeSchema);
