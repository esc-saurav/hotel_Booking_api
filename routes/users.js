import express from "express";
import {
  deleteUser,
  updateUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send("Hello user you are loggged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//   res.send("Hello user you are loggged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//   res.send("Hello admin  you are loggged in and you can delete all account")
// })

router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);

export default router;


