const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello, Azure DevOps! What a pity it doesn't work.`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
