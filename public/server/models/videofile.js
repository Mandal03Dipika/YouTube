import mongoose from "mongoose";

const videoFileSchema = new mongoose.Schema(
  {
    videotitle: { type: String, required: true },
    filename: { type: String, required: true },
    filetype: { type: String, required: true },
    filepath: { type: String, required: true },
    filesize: { type: String, required: true },
    videochanel: { type: String, required: true },
    like: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    uploader: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("VideoFile", videoFileSchema);
