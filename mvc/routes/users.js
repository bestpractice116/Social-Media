const express = require('express');
const router = express.Router();

const middleware = require("../routes/middleware/middleware");
const userCtrl = require("../controllers/users");

router.post("/register",userCtrl.registerUser) ;
router.post("/login",userCtrl.loginUser);

router.get("/generate-feed",middleware.authorize,userCtrl.generateFeed);

router.get("/search-results",middleware.authorize,userCtrl.getSearchResult);
router.post("/send-friend-request/:from/:to",middleware.authorize,userCtrl.sendFriendRequest);

router.get("/:userid",middleware.authorize,userCtrl.getUserData);

router.delete("/all",userCtrl.deleteAllUsers);

module.exports = router;