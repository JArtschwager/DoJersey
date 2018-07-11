const router = require("express").Router();
const activitiesRoutes = require("./activities/activitiesRoutes");
const userRoutes = require("./users");
const savedRoutes = require("./saved/savedRoutes");

router.use("/activities", activitiesRoutes);
router.use("/users", userRoutes);
router.use("/saved", savedRoutes);


module.exports = router;


