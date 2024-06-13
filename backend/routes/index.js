const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require("../controller/user/userSignIn");
const userDetailsController = require("../controller/user/userDetails");
const authToken = require("../meddleware/authToken");
const userLogout = require("../controller/user/userLogout");
const allUsers = require("../controller/user/allUsers");
const updateUser = require("../controller/user/updateUser");
const uploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require("../controller/product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct");
const getProductDetails = require("../controller/product/getProductDetails");
const addToCartController = require("../controller/user/addToCartController");
const countAddToCartProduct = require("../controller/user/countAddToCartProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");
const searchProduct = require("../controller/product/searchProduct");
const filterProductController = require("../controller/product/filterProduct");
const paymentController = require("../controller/order/paymentController");
const webhooks = require("../controller/order/webhook");
const orderController = require("../controller/order/orderController");

router.post("api/signup", userSignUpController);
router.post("api/signin", userSignInController);
router.get("api/user-details", authToken, userDetailsController);
router.get("api/userLogout", userLogout);

// admin panels

router.get("api/all-user", authToken, allUsers);
router.post("api/update-user", authToken, updateUser);

// Product
router.post("api/upload-product", authToken, uploadProductController);
router.get("api/get-product", getProductController);
router.post("api/update-product", authToken, updateProductController);
router.get("api/get-categoryProduct", getCategoryProduct);
router.post("api/category-product", getCategoryWiseProduct);
router.post("api/product-details", getProductDetails);
router.get("api/search", searchProduct);
router.post("api/filter-product", filterProductController);

//user add To Cart
router.post("api/addtocart", authToken, addToCartController);
router.get("api/countAddToCartProduct", authToken, countAddToCartProduct);
router.get("api/addToCartViewProduct", authToken, addToCartViewProduct);
router.post("api/update-cart-product", authToken, updateAddToCartProduct);
router.post("api/delete-cart-product", authToken, deleteAddToCartProduct);

// payment and order

router.post("api/checkout", authToken, paymentController);
router.post("api/webhook", webhooks); // /api/webhook
router.get("api/order-list", authToken, orderController);

module.exports = router;
