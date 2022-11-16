import { WebSocketServer } from "ws";
const server = new WebSocketServer({ port: 1234 });

const obj = {
    msg: "hello from server",
    code: "200",
};

server.on("connection", (socket) => {
    // 向客户端发送消息
    socket.send(JSON.stringify(obj));

    // 从客户端接收消息
    socket.on("message", (data) => {
        const packet = JSON.parse(data);
        obj.msg = packet.msg;
        boardCast();
        console.log(packet);
    });
});

function boardCast() {
    server.clients.forEach((client) => {
        client.send(JSON.stringify(obj));
    });
}
