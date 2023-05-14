const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

//添加流水
router.post("/add-transaction", async function(req, res) {
    try {
        const newtransaction = new Transaction(req.body);
        await newtransaction.save();
        res.send("流水添加成功！");
    } catch (error) {
        res.status(500).json(error);
    }
});

//获取所有流水
router.post("/get-all-transactions", async function(req, res) {
    try {
        const transactions = await Transaction.find({ userid: req.body.userid });
        res.send(transactions);
    } catch (error) {
        res.status(500).json(error);
    }
});

//暴露 router模块
module.exports = router;