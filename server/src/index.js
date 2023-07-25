const express = require('express');
const cors = require('cors');
const users = require('./users.json');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email_id === email && user.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

