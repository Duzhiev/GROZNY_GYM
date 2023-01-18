const { Router } = require("express");

const router = Router();

router.use("/", require("./Users.route"));
router.use("/goods", require("./Goods.route"));
router.use("/", require("./Category.route"));
router.use(require("./Coach.route"));

module.exports = router;
