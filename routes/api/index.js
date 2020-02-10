const router = require("express").Router();
const gameRoutes = require("./game");
const gameDetailsRoutes = require("./games");


// Book routes
router.use("/game", gameRoutes);
router.use("/games", gameDetailsRoutes);


module.exports = router;
