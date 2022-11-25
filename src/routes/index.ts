import { Router } from "express";
import {
  createUser,
  verifyHeader,
  loginUser,
  myBalance,
  cashInOut,
  seeTransactions,
} from "../db";

const router = Router();

router.get("/home", verifyHeader, (req, res) => {
  res.send("You're logged :)");
});
router.get("/balance", verifyHeader, myBalance);
router.get("/transactions", seeTransactions);

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/transfer", cashInOut);

export default router;
