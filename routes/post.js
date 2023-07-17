import { Router } from "express";
const router = Router();
import {getFeedPosts, getUserPosts, likePosts} from"../controllers/posts";

import {verifyToken} from "../middlewares/auth";

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.patch("/:id/like", verifyToken, likePosts);

export default router;