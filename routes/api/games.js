const router = require("express").Router();
const gamesController = require("../../controllers/gameController");

// Matches with "/api/games"
router.route("/")
  .get(gamesController.findAll)
  .post(gamesController.create);

  router
  .route("/login/:email")
  .get(gamesController.findOne)

  router
  .route("/details")
  .get(gamesController.getGamesDetails)
  .post(gamesController.createDetails);
  
  router
  .route("/details:id")
  .delete(gamesController.removeGamesDetails)
  

// Matches with "/api/games/:id"
  router  
  .route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);

module.exports = router;
