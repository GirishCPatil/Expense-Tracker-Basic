const Expense = require('../models/expense');

// Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const { expenseAmt, description, category } = req.body;
    const newExpense = await Expense.create({ expenseAmt, description, category });
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create expense' });
  }
};

// Get all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve expenses' });
  }
};

//edit expense
exports.editExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const { expenseAmt, description, category } = req.body;
    const expense = await Expense.findByPk(expenseId);
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }
    expense.expenseAmt = expenseAmt;
    expense.description = description;
    expense.category = category;
    await expense.save();
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update expense' });
  }
};

// delete expense
exports.deleteExpense = async (req, res) => {
  try { 
    const expenseId = req.params.id;
    const expense = await Expense.findByPk(expenseId);

    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }
    await expense.destroy();
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete expense' });
  }
};

