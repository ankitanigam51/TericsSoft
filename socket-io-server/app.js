
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);
io.on("connection", socket => {
  console.log("New client connected"), setInterval(
    () => getApiAndEmit(socket),
    10000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});
const getApiAndEmit =  function draw() {
      var canvas = document.getElementById('clicle');
      if(canvas.getContext){
        var ctx = canvas.getContext('2d');
        var X = canvas.width 
        var Y = canvas.clientHeight;
        var R = 130
        ctx.beginPath();
        ctx.arc(X,Y,R,0,2*Math.PI, false);
        ctx.linewidth = 3;
        ctx.strokeStyle = '#FF000'
        ctx.stroke();
      }
    }
    socket.emit("FromDraw", res.data.currently.canvas);

};
server.listen(port, () => console.log(`Listening on port ${port}`));