const router = require("express").Router();

const PetController = require("../controllers/PetControllers");

router.post("/create", PetController.create);

module.exports = router;
