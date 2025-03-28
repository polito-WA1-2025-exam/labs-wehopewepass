import express from "express";
import { fetchBowls } from "../controllers/pokeBowlController.mjs";

const router = express.Router();

router.route("/fetchAll").get(fetchBowls); 

export default router;
