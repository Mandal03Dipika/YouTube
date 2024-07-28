import videofile from "../models/videofile.js";
import mongoose from "mongoose";

export const viewsController = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Video Unavailable....");
  }
  try {
    const files = await videofile.findById(_id);
    const views = files.views;
    const updateView = await videofile.findByIdAndUpdate(_id, {
      $set: { views: Views + 1 },
    });
  } catch (error) {
    res.status(400).json("error", error);
  }
};
