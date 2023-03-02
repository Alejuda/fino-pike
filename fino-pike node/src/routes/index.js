const { Router } = require("express");
const router = Router();
const path = require("path");
// const {} = require('../controllers/productController.js');

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../views/pages/home.ejs"));
});

router.get("/detalle-producto", (req, res) => {
  res.render(path.join(__dirname, "../views/pages/product-detail.ejs"));
});

router.get("/inicio-sesion", (req, res) => {
  res.render(path.join(__dirname, "../views/pages/log-in.ejs"));
});

router.get("/registrarme", (req, res) => {
    res.render(path.join(__dirname, '../views/pages/register.ejs'))
});

router.get("/carrito", (req, res) => {
    res.render(path.join(__dirname, '../views/pages/cart.ejs'))
});

module.exports = router;
