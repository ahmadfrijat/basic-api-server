'use strict';

const express = require('express');
const validator = require('../middleware/validator.js');
const Food = require('../models/food.js');
const food = new Food();
const router = express.Router();


router.post('/',addFood);
router.get('/',getFood);
router.get('/:id', validator, getFoodById);
router.put('/:id', validator, updateFood);
router.delete('/:id', validator, deleteFood);


function addFood(req,res) {
    const foodObject = req.body;
    const resObj = food.create(foodObject);
    res.status(201).json(resObj);
}

function getFood(req,res) {
    const resObj = food.read();
    res.json(resObj);
}

function getFoodById(req,res) {
    const resObj = food.read(req.params.id);
    res.json(resObj);
}

function updateFood(req,res) {
    const foodObject = req.body;
    const resObj = food.update(req.params.id, foodObject);
    res.json(resObj);
}

function deleteFood(req,res) {
    const resObj = food.delete(req.params.id);
    res.json(resObj);
}

module.exports = router;