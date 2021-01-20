const express = require("express")
const bodyParser = require('body-parser')
const config = require('../config');

const app = express();
const router = express.Router();
const mockPort = config.dev.mockPort;

//body-parser 解析json格式数据
app.use(bodyParser.json());
//此项必须在 bodyParser.json 下面,为参数编码
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
   res.send('hello world'); 
});
router.use('/test', require('./test'));
app.use('/mock', router);

app.listen(mockPort, err => {
  if (err) {
      return;
  }
  console.log(`Mock listening at http://localhost:${mockPort}\n`);
});
