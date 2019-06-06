
module.exports = function(server, origins) {
  const io = require('socket.io').listen(server);

  if(origins) {
    io.serveClient("origins", "*:*");
  }

  io.on('connection', (socket) => {

    socket.on('joinBoard', (boardId) => {
      socket.join(boardId);
    });

    socket.on('leaveBoard', function (boardId) {
      socket.leave(boardId);
    });

    socket.on('addList', function (data) {
      socket.broadcast.to(data.boardId)
        .emit("addList", data);
    });

    socket.on('addCard', function (data) {
      socket.broadcast.to(data.boardId)
        .emit("addCard", data);
    });


    socket.on('updateList', function (data) {
      socket.broadcast.to(data.boardId)
        .emit("updateList", data);
    });

    socket.on('updateCard', function (data) {
      socket.broadcast.to(data.boardId)
        .emit("updateCard", data);
    });

    socket.on('disconnect', function() {
      
    })
  })
}