const express = require('express');
const router = express.Router();

require('../db/conn');
const Form = require("../model/form");

router.get('/form', (req, res) => {
    res.send(`hello i am from Form router.`);
});

router.post('/postdata', async (req, res) => {
    const { name, about, price, rating, category } = req.body;
    try {
        const postData = await Form.create({name, about, price, rating, category});
        res.json(postData);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.get('/getdata', async (req, res) => {
    try {
        const getData = await Form.find().limit(limi);
        res.json(getData);
        console.log(getData);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.get('/getdata/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const getData = await Form.findById(id);
        res.json(getData);
    } catch(err) {
        res.status(500).send(err);
    }
})

router.get('/get/:rating/:category', async (req, res) => {
    var { rating, category } = req.params;
    try {
        const getData = await Form.find({"rating":rating, "category":category});
        res.json(getData);
    } catch(err) {
        res.status(500).send(err);
    }
})

router.put('/updatedata/:id', async (req, res) => {
    const { id } = req.params;
    const { name, about, price, rating, category } = req.body;
    try {
        const updateData = await Form.findByIdAndUpdate(id, { name, about, price, rating, category });
        res.json(updateData);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.delete('/deletedata/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteData = await Form.findByIdAndDelete(id);
        res.json(deleteData);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;