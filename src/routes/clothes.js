'use strict';

const express = require('express');
const validator = require('../middleware/validator.js');
const Clothes = require('../models/clothes.js');
const clothes = new Clothes();
const router = express.Router();


router.post('/',addClothes);
router.get('/',getClothes);
router.get('/:id', validator, getClothesById);
router.put('/:id', validator, updateClothes);
router.delete('/:id', validator, deleteClothes);


function addClothes(req,res) {
    const clothesObject = req.body;
    const resObj = clothes.create(clothesObject);
    res.status(201).json(resObj);
}

function getClothes(req,res) {
    const resObj = clothes.read();
    res.json(resObj);
}

function getClothesById(req,res) {
    const resObj = clothes.read(req.params.id);
    res.json(resObj);
}

function updateClothes(req,res) {
    const clothesObject = req.body;
    const resObj = clothes.update(req.params.id, clothesObject);
    res.json(resObj);
}

function deleteClothes(req,res) {
    const resObj = clothes.delete(req.params.id);
    res.json(resObj);
}

module.exports = router;