const express = require('express');
const route = express.Router();
const Users = require("../model/usermodel");

route.get("/", async (req, res) => {
    try {
        const result = await Users.find({});

        res.status(200).json({
            status: true,
            data: result
        })

    } catch (err) {
        res.status(400).json({
            status: false,
            error: err.message
        })
    }

})

route.post("/save", async (req, res) => {
    try {
        const result = await Users.create(req.body);

        res.status(200).json({
            status: true,
            message: "data inserted success"
        })

    } catch (err) {
        res.status(400).json({
            status: false,
            error: err.message
        })
    }


})


route.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Users.deleteOne({ _id: id });
        if (result.deletedCount) {
            res.status(200).json({
                status: true,
                message: "data inserted success"
            })
        } else {
            res.status(400).json({
                status: false,
                message: "data inserted faild"
            })
        }


    } catch (err) {
        res.status(400).json({
            status: false,
            error: err.message
        })
    }
})


module.exports = route;