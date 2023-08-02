const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/check-multiple', (req, res) => {
  const inputNumber = parseInt(req.query.number);

  if (isNaN(inputNumber)) {
    return res.status(400).json({ error: 'Invalid input. Please provide a valid integer.' });
  }

  let result = '';

  if (inputNumber % 5 === 0) {
    result += 'L';
  }

  if (inputNumber % 7 === 0) {
    result += 'R';
  }

  if (!result) {
    result = inputNumber;
  }

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
