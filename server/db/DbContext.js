import mongoose from "mongoose";
import ProfileSchema from "../models/Profile";
import Post from "../models/Post";

class DbContext {
  Posts = mongoose.model("Posts", Post);
  Profile = mongoose.model("Profile", ProfileSchema);
}

export const dbContext = new DbContext();
