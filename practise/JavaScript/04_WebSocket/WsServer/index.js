import { WebSocketServer } from "ws";
const server = new WebSocketServer({ port: 1234 });

server.on("connection", (socket) => {
    // 向客户端发送消息
    socket.send(
        JSON.stringify({
            msg: "hello from server",
            code: "200",
        }),
    );

    // 从客户端接收消息
    socket.on("message", (data) => {
        console.log(data);
        const packet = JSON.parse(data);
        console.log(packet);
    });

    socket.addEventListener("message", ({ data }) => {
        console.log(data);
    });
});
