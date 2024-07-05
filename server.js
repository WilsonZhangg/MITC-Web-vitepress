const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// 設置 JSON 文件的路徑
const dataFilePath = path.join(__dirname, 'docs/.vitepress/src/json/workers.json');

// 讀取 JSON 文件中的資料
const getData = () => {
  const jsonData = fs.readFileSync(dataFilePath);
  return JSON.parse(jsonData);
};

// 寫入資料到 JSON 文件
const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// 返回幹部資料
app.get('/api/members', (req, res) => {
  const data = getData();
  res.json(data);
});

// 更新幹部資料
app.post('/api/members', (req, res) => {
  const data = req.body;
  writeData(data);
  res.status(200).send('Data updated');
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
