const express = require('express');
const router = express.Router();
const {createExpense, getAllExpenses,editExpense,deleteExpense}= require('../controllers/expenseController');



router.post('/add', createExpense);
router.get('/all', getAllExpenses);
router.put('/edit/:id', editExpense);
router.delete('/delete/:id', deleteExpense);


module.exports = router;