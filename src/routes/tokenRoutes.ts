import express from "express";
import { addToken, getTokens } from "../controller/tokenController";

const router = express.Router();

router.post("/tokens", addToken);
router.get("/tokens", getTokens);

export default router;
