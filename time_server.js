net = require("net");

let port = Number(process.argv[2]);

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function formattedNow(){
    let date = new Date();
    month = date.getMonth() + 1;

    return date.getFullYear()+
    "-"+zeroFill(month)+
    "-"+zeroFill(date.getDate())+" "
    +zeroFill(date.getHours())
    +":"+zeroFill(date.getMinutes());
}

function listener(socket){

    socket.write(formattedNow()+ "\n");
    socket.end();
}

let server = net.createServer(listener)
server.listen(port);