const express = require("express");
const router = express.Router();
const Wine = require("../model/wine");
const winesController = require("../controllers/wines-controller");

router.get("/", winesController.getAllWines);
router.post("/", winesController.addWine);
router.get("/:id", winesController.getById);
router.put("/:id", winesController.updateWine);
router.delete("/:id", winesController.deleteWine);

module.exports = router;