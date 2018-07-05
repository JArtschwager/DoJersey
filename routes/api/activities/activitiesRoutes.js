const router = require("express").Router();
const activitiesController = require ("../../../controllers/activitiesController");


router
    .route("/")
    .get(activitiesController.findAll)
    .post(activitiesController.create);


router
    .route("/:id")
    .get(activitiesController.findById)
    .put(activitiesController.update)
    .delete(activitiesController.remove);


module.exports = router;
