import videofile from "../models/videofile.js";

export const uploadVideo = async (req, res) => {
  if (req.file === undefined) {
    res.status(404).json({ message: "Please upload a mp.4 video file only" });
  } else {
    try {
      const file = new videofile({
        videotitle: req.body.title,
        filename: req.file.originalname,
        filepath: req.file.path,
        filetype: req.file.mimetype,
        filesize: req.file.size,
        videochanel: req.body.chanel,
        uploader: req.body.uploader,
      });
      await file.save();
      res.status(200).send("File Uploaded Successfully");
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
};

export const getAllVideos = async (req, res) => {
  try {
    const files = await videofile.find();
    res.status(200).send(files);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
