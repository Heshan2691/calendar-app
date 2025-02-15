import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  category: String, // Lab, Exam, etc.
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
