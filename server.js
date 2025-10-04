const express = require('express');
const bodyParser = require('body-parser');
const SocketIO = require('socket.io');
const app = express();
const PORT = process.env.PORT || 3000;

// Средства для приема POST-запросов
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Маршрут для получения данных с ESP32
app.post('/data', (req, res) => {
    console.log(req.body); // Логируем полученные данные
    io.emit('update_data', req.body); // Передаем данные в браузер
    res.sendStatus(200);
});

// Запускаем сервер
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Socket.IO для отправки данных в реальном времени
const io = SocketIO(server);
