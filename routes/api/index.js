const router = require("express").Router();
const gameRoutes = require("./game");

// Game routes
router.use("/game", gameRoutes);

module.exports = router;
