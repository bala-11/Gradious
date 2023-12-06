const router = require("express").Router();

const controller = require("../controllers/customerController");

router
    .post('/createTransactions',controller.createTransaction)
    .get('/getAllTransactions',controller.getAllTransaction)
    .get('/getTransactions/:id',controller.getSpecificTransaction)
router
    .put("/updateTransaction/:id",controller.updateTransaction)
    .delete("/deleteTransaction/:id",controller.deleteTransaction)


module.exports = router;