const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname)); // Frontend fayllarni xizmat qiladi

io.on("connection", (socket) => {
    console.log("Foydalanuvchi ulandi");

    socket.on("chat message", (data) => {
        io.emit("chat message", data); // Barcha foydalanuvchilarga yuborish
    });

    socket.on("disconnect", () => {
        console.log("Foydalanuvchi chiqib ketdi");
    });
});

server.listen(3000, () => {
    console.log("Server 3000-portda ishlayapti...");
});
