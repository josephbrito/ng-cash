"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.get("/home", db_1.verifyHeader, (req, res) => {
    res.send("You're logged :)");
});
router.get("/balance", db_1.verifyHeader, db_1.myBalance);
router.get("/transactions", db_1.seeTransactions);
router.post("/register", db_1.createUser);
router.post("/login", db_1.loginUser);
router.post("/transfer", db_1.cashInOut);
exports.default = router;
