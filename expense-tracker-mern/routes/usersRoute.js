const express = require("express");
const User = require("../models/User");
// 使用 express.Router 类创建模块化、可挂载的路由句柄
const router = express.Router();

router.post("/login", async function (req, res) {
    try {
        const result = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });

        if (result) {
            res.send(result);
        } else {
            res.status(500).json("Error");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/register", async function (req, res) {
    try {
        //创建用户
        const newuser = new User(req.body);
        await newuser.save();
        res.send('新用户注册成功！')
    } catch (error) {
        res.status(500).json(error);
    }
});

//暴露 router模块
module.exports = router;
