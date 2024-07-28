import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  videoid: String,
  userid: String,
  commentbody: String,
  usercommented: String,
  commentedon: { type: Date, default: Date.now },
});

export default mongoose.model("Comments", commentSchema);
