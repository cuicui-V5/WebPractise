import { WebSocketServer } from "ws";
const server = new WebSocketServer({ port: 1234 });
const msgs = [];
server.on("connection", (socket) => {
    // 向客户端发送消息
    socket.send(JSON.stringify(msgs));

    // 从客户端接收消息
    socket.on("message", (data) => {
        const packet = JSON.parse(data);
        console.log(packet);
        msgs.push(packet);
        // 向客户端发送消息
        socket.send(JSON.stringify(msgs));
    });
});
