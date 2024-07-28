import likedvideo from "../models/likevideo.js";

export const likedVideoController = async (req, res) => {
  const likedVideoData = req.body;
  const likedVideoSave = new likedvideo(likedVideoData);
  try {
    await likedVideoSave.save();
    res.status(200).json("Added to liked video");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const getAllLikedVideo = async (req, res) => {
  try {
    const files = await likedvideo.find();
    res.status(200).send(files);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const deleteLikedVideo = async (req, res) => {
  const { videoId: videoId, viewer: viewer } = req.params;
  try {
    await likedvideo.findOneAndDelete({
      videoId: videoId,
      viewer: viewer,
    });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
