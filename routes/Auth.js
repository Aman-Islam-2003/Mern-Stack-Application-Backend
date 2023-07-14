import { express } from "express";
const router = express.Router();
import {register,login} from ("../controllers/Auth");

router.post("/auth/register", upload.single("picture"), register);
router.post("/auth/login", login);

