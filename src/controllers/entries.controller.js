const fs = require('fs');
const uuid = require('uuid');
const express = require('express');


const json_products = fs.readFileSync('src/products.json', 'utf-8')
let products = JSON.parse(json_products)

const entries = [];
 //se guarda en la memoria del servidor de momento
//2nda opcion loadDB se guarda en archivo json
//3ra opcion conectarla a mongoDB, mySQL
const renderIndex = (req, res) => {
    res.render('index', {products});

};

const renderNewEntry = (req, res) => {
    res.render('new-entry');
};

const renderSuccess = (req, res) =>{
    res.render('success') ;
};

const createNewEntry = (req, res) => {
    console.log(req.body)
    var newProduct = {
        id: uuid.v4(),
        title: req.body.title,
        price: req.body.price,
        number: req.body.number,
        name: req.body.name,
        content: req.body.body,
        published: new Date()
    };
    products.push(newProduct);

    const json_products = JSON.stringify(products);
    fs.writeFileSync('src/products.json', json_products, 'utf-8');

    res.redirect('/success');
    
};

const deleteEntry = async (req, res) =>{
    res.redirect('/success');
    console.log({products});
    console.log("-------------------------------------");
    console.log(req.params.id)
    products = products.filter(product => product.id != req.params.id);
    console.log("-------------------------------------");
    const json_products = JSON.stringify(products)
    fs.writeFileSync('src/products.json', json_products);
    
};

module.exports = {
    renderIndex,
    renderNewEntry,
    createNewEntry,
    deleteEntry,
    renderSuccess
}