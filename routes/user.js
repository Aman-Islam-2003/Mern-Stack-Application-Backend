import { Router } from "express";
const router =  Router();
import {getUser, getUserFriends, addRemoveFriend} from "../controllers/user.js";

import {verifyToken} from "../middlewares/auth.js";

router.get("/:id",verifyToken, getUser);
router.get("/:id/friends",verifyToken, getUserFriends);
router.patch("/:id/:friendId",verifyToken, addRemoveFriend);

export default router;