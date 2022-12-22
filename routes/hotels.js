import express from "express";
import {
  createHotel,
  deleteHotel,
  updateHotel,
  getHotel,
  getHotels,
} from "../controllers/hotel.js";

const router = express.Router();

//Create
router.post("/", createHotel);
//update
router.put("/:id", updateHotel);
//Delete
router.delete("/:id", deleteHotel);
//get
router.get("/:id", getHotel);
//get all
router.get("/", getHotels);

export default router;
