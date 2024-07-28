import watchlater from "../models/watchlater.js";

export const watchLaterController = async (req, res) => {
  const watchLaterData = req.body;
  const addToWatchLater = new watchlater(watchLaterData);
  try {
    await addToWatchLater.save();
    res.status(200).json("Added to Watch Later");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const getAllWatchLaterController = async (req, res) => {
  try {
    const files = await watchlater.find();
    res.status(200).send(files);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const deleteWatchLater = async (req, res) => {
  const { videoId: videoId, viewer: viewer } = req.params;
  try {
    await watchlater.findOneAndDelete({
      videoId: videoId,
      viewer: viewer,
    });
    res.status(200).json({ message: "Removed from watch later" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
