const router = require("express").Router();
const activitiesRoutes = require("./activities/activitiesRoutes");

router.use("/activities", activitiesRoutes);

module.exports = router;



