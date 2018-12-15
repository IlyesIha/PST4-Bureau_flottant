var express = require('express');
var router = express.Router();

var capteursList = [{
  bureau: "10",
  temp: "0"
}, {
  bureau: "20",
  temp: "0"
}, {
  bureau: "30",
  temp: "0"
}, {
  bureau: "40",
  temp: "0"
}];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get("/capteurs", function (req, res) {
  res.send(capteursList);
});

router.post("/capteurs", (req, res) => {
  capteursList.forEach(element => {
    if (element.bureau == req.query.bureau) {
      element.temp = req.query.temp;
    }
  });
  res.send("OK");
});

//const numBureau = 10;
// var valeurTemp = pin(122);
// h.post("www.webserver.com/capteurs?bureau="+numBureau+"&temp="+valeurTemp);

module.exports = router;