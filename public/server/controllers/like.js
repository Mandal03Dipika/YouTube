import mongoose from "mongoose";
import videoFile from "../models/videofile.js";

export const likeVideoController = async (req, res) => {
  const { id: _id } = req.params;
  const { like } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Video Unavailable....");
  }
  try {
    const updateLike = await videoFile.findByIdAndUpdate(_id, {
      $set: { Like: like },
    });
    res.status(200).json(updateLike);
  } catch (error) {
    res.status(400).json("error", error);
  }
};
