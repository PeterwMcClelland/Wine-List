// const { request } = require("express");
const Wine = require("../model/wine");


const getAllWines = async(req,res,next) => {
    let wines;
    try {
wines = await Wine.find();
    } catch (err) {
        console.log(err);
    }

    if(!wines) {
        return res.status(404).json({message: "No Wines Found"})
    }
    return res.status(200).json({ wines });
}

const getById = async(req,res,next) => {
    const id = req.params.id
    let wine;
    try {
        wine = await Wine.findById(id);
    }catch (err) {
        console.log(err);
    }
    if(!wine) {
        return res.status(404).json({message: "No Wine Found"})
    }
    return res.status(200).json({ wine });
};

const addWine = async (req,res,next) => {
    const {name, brand, vintage, varietal, appellation, harvestdate, aging, bottlingdate, alcohol, price, image} = req.body;
    let wine;
    try {
        wine = new Wine({
            name,
            brand,
            vintage,
            varietal,
            appellation,
            harvestdate,
            aging,
            bottlingdate,
            alcohol,
            price,
            image
        });
        await wine.save();
    }catch (err){
        console.log(err);
    }

    if(!wine) {
        return res.status(500).json({message:'Unable To Add'})
    }
    return res.status(201).json({ wine });
};

const updateWine = async (req, res, next) => {
    const id = req.params.id;
    const {name, brand, vintage, varietal, appellation, harvestdate, aging, bottlingdate, alcohol, price, image} = req.body;
    let wine;
    try {
        wine = await Wine.findByIdAndUpdate(id, {
            name,
            brand,
            vintage,
            varietal,
            appellation,
            harvestdate,
            aging,
            bottlingdate,
            alcohol,
            price,
            image
        });
        wine = await wine.save();
    } catch (err) {
        console.log(err);
    }
    if (!wine) {
        return res.status(404).json({message:'Unable To Update By this ID'});
    }
    
    return res.status(200).json({ wine });
    
};

const deleteWine = async (req, res, next) => {
    const id = req.params.id;
    let wine;
    try {
        wine = await Wine.findByIdAndRemove(id)
    } catch (err) {
        console.log(err);
    }
    if(!wine) {
        return res.status(404).json({ message:'Unable To Delete By this ID'});
    }
    return res.status(200).json({ wine });
};


exports.getAllWines = getAllWines;
exports.addWine = addWine;
exports.getById = getById;
exports.updateWine = updateWine;
exports.deleteWine = deleteWine;