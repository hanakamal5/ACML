var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")
var mongoose = require("mongoose")
var cont = require('./controller')
var config = require('./config')
var app = express()
app.use(bodyParser.json())
app.use(cors())
var parkingSlots = require('./ParkingSlots.js')
mongoose.connect(config.db)
.then(() => console.log("Connected"))
.catch(err => console.log(err))
app.use('/api', cont)
slots=[]
var count= 0
while(count<20){
    slots[count] = false
    count++
}
var ps= new parkingSlots({slots:slots})
ps.save()
app.listen(config.port)