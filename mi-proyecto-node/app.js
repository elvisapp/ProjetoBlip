const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/repos', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/orgs/takenet/repos?sort=created&direction=asc');
    const csharpRepos = response.data.filter(repo => repo.language === 'C#').slice(0, 5);
    res.json(csharpRepos);
  } catch (error) {
    res.status(500).send('Error fetching repos');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
