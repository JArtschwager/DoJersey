const router = require("express").Router();
const activitiesRoutes = require("./activities/activitiesRoutes");
const userRoutes = require("./users");


router.use("/activities", activitiesRoutes);
router.use("/users", userRoutes);


module.exports = router;



