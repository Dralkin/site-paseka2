document.addEventListener('DOMContentLoaded', function() {
    // Пример данных для графиков
    const weight1Data = [20, 45, 55, 65, 75];
    const weight2Data = [15, 25, 35, 40, 60];
    const temperatureData = [20, 22, 24, 28, 15];
    const humidityData = [50, 55, 60, 88, 25];

    // Функция для создания графика
    function createChart(canvasId, data, label, color) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['12:00', '12:30', '13:00', '13:30','14:00','14:30' ],
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: color
                }]
            },
            options: {}
        });
    }

    // Создание графиков
    createChart('weight1', weight1Data,'Вес1', 'black');
    createChart('weight2', weight2Data, 'Вес2', 'brown');
    createChart('temperature', temperatureData, 'Температура', 'red');
    createChart('humidity', humidityData, 'Влажность', 'blue');
});