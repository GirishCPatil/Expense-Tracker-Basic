const express = require('express');
const app = express();
const port = 4000;
const sequelize = require('./utils/database');
const expenseRoutes = require('./routes/expenseRoute');
const cors = require('cors');


app.use(cors({
  origin: '*',   // allow all origins (dev only)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('Welcome to the Expense Tracker API');
});


app.use('/expenses', expenseRoutes);

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
  })
  .catch(err => {
    console.log('Error syncing database:', err);
  });