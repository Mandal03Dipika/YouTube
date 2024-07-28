import express from express;
import {likeVideoController} from "../controllers/like.js";
import {viewsController} from "../controllers/view.js";
import {uploadVideo,getAllVideos} from "../controllers/video.js";
import {historyController,deleteHistory,getAllHistoryController} from "../controllers/history.js";
import {watchLaterController,getAllWatchLaterController,deleteWatchLater} from "../controllers/watchlater.js";
import {likedVideoController,getAllLikedVideo,deleteLikedVideo} from "../controllers/likevideo.js";
import upload from "../helper/fileHelper.js";
import auth from "../middleware/auth.js";

const routes=express.Router();

routes.post("/uploadvideo",auth,upload.single("file"),uploadVideo);
routes.get("/getvideos",getAllVideos);
routes.patch('/like/:id',auth,likeVideoController);
routes.patch('/view/:id',viewsController);
routes.post('/history',auth,historyController);
routes.get('/getallhistory',getAllHistoryController);
routes.delete('/deletehistory/:userid',auth,deleteHistory);
routes.post('/watchlater',auth,watchLaterController);
routes.get('/getallwatchlater',getAllWatchLaterController);
routes.delete('/deletewatchlater/:videoid/:viewer',auth,deleteWatchLater);
routes.post('/likevideo',auth,likedVideoController);
routes.get('/getalllikevide',getAllLikedVideo);
routes.delete('/deletelikevideo/:videoid/:viewer',auth,deleteLikedVideo);

export default routes;
