const btn = document.querySelector("#btn");
const input = document.querySelector("#input");

const show = document.querySelector("#show");

const socket = new WebSocket("ws://localhost:1234");
btn.addEventListener("click", () => {
    // 向服务器发送消息
    socket.send(
        JSON.stringify({
            msg: input.value,
        }),
    );
});
socket.addEventListener("open", () => {
    // 向服务器发送消息
    socket.send(
        JSON.stringify({
            msg: "client ready",
        }),
    );
});

socket.addEventListener("message", ({ data }) => {
    const packet = JSON.parse(data);
    console.log(packet);
    show.innerHTML = JSON.stringify(packet);
});
