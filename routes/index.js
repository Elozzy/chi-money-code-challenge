const express = require("express");
const router = express();
const passport = require("passport");
const UserRoute = require("./api/UserRoute");

// Passport Middleware
router.use(passport.initialize());

// Passport Configuration
require("../config/passport")(passport);

router.use("/users",UserRoute )

module.exports = router;
