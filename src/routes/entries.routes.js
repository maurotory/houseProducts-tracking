const { Router } = require('express');
const router = Router();
const express = require('express');
const uuid = require('uuid');

const {renderIndex, renderNewEntry, createNewEntry, deleteEntry, renderSuccess} = require('../controllers/entries.controller')

router.get('/', renderIndex);

router.get('/success', renderSuccess);

router.get('/new-entry', renderNewEntry);

router.post('/new-entry', createNewEntry);

router.get('/delete/:id', deleteEntry/*(req,res) => {console.log(req.params.id)}*/);
//deleteEntry



module.exports = router;