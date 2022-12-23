import express from "express";
import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//Create
router.post("/",verifyAdmin, createHotel);
//update
router.put("/:id",verifyAdmin, updateHotel);
//Delete
router.delete("/:id",verifyAdmin, deleteHotel);
//get
router.get("/:id", getHotel);
//get all
router.get("/", getHotels);

export default router;
