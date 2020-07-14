//Load express module with `require` directive
var express = require('express')
var Request = require("request")
var app = express()

var inventoryServiceRes;

var urlInventory = "http://inventory-svc.ecom-system.local:8081" 

 
//Define request response in root URL (/)
app.get('/*', function (req, res) {
   
  //Calling Inventory Service 
   Request.get(urlInventory, (error, response, body) => {
   if(error) {
      inventoryServiceRes='error';
    }
    else{
    inventoryServiceRes=body;
  }
})


  res.send("Order ..Recieved. Processing started...| " + inventoryServiceRes )
})

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('Order service listening on port 8080!')
})
