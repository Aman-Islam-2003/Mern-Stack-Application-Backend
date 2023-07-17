import { express } from "express";
const router = express.Router();
import {register,login} from ("../controllers/Auth");


router.post("/login", login);

export default router;