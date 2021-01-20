const express = require("express")

const router = express.Router();

const sendData = (res, data) => {
  res.set('content-type', 'application/json');
  res.send(data);
  res.end();
};

router.use('/getId', (req, res) => {
  const data = {
    "list": [
      {
        "id": 1,
        "name": 'name'
      }
    ]
  }
  sendData(res, data);
});

router.use('/saveData', (req, res) => {
  const data = {
    error: 0
  }
  sendData(res, data);
});

module.exports = router;