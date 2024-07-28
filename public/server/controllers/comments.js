import mongoose from "mongoose";
import comment from "../models/comment.js";

export const postComment = async (req, res) => {
  const commentData = req.body;
  const postComment = new comment(commentData);
  try {
    await postComment.save();
    res.status(200).json("Posted the comment");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const getComment = async (req, res) => {
  try {
    const commentList = await comment.find();
    res.status(200).send(commentList);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const deleteComment = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).send("Comments Unavailable");
  }
  try {
    await comment.findByIdAndDelete(_id);
    res.status(200).json({ message: "Deleted comment" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

export const editComment = async (req, res) => {
  const { id: _id } = req.params;
  const { commentBody } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).send("Comments Unavailable");
  }
  try {
    const updateComment = await comment.findByIdAndUpdate(_id, {
      $set: { commentBody: commentBody },
    });
    res.status(400).json(updateComment);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
