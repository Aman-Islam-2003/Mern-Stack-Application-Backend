import { express } from "express";
const router = express.Router();
import {register,login} from ("../controllers/Auth");

router.post("/register", upload.single("picture"), register);
router.post("/login", login);

export default router;