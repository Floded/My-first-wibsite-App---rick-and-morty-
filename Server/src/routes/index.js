const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");
const { deleteFav, postFav } = require("../controllers/handleFavorites");
const {login} = require("../controllers/login")

const router = Router();

router.get("/character/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/login", login);

module.exports = router;
