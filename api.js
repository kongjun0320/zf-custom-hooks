const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();

app.use(cors());
app.use(logger('dev'));

// http://localhost:8000/api/users?currentPage=1&pageSize=10
app.get('/api/users', function (req, res) {
  const currentPage = parseInt(req.query.currentPage);
  const pageSize = parseInt(req.query.pageSize);
  // mock 总条数
  const total = 25;
  const list = [];
  let offset = (currentPage - 1) * pageSize;

  for (let i = offset; i < offset + pageSize; i++) {
    list.push({
      id: i + 1,
      name: `User ${i + 1}`,
    });
  }

  res.json({
    currentPage,
    pageSize,
    totalPage: Math.ceil(total / pageSize),
    list,
  });
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
