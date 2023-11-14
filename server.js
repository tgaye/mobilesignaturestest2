const express = require('express');
const { ethers } = require('ethers');

const app = express();
app.use(express.json());
const port = 3000;

// Endpoint to create a message for signing
app.post('/api/createMessage', (req, res) => {
  const message = "Hello, please sign this message to authenticate.";
  // Normally, you'd create a message based on user/session data
  res.send({ message });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});