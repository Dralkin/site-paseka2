document.addEventListener('DOMContentLoaded', function() {
    // Пример данных для графиков
    const weight1Data = [10, 20, 30];
    const weight2Data = [15, 25, 35];
    const temperatureData = [20, 22, 24];
    const humidityData = [50, 55, 60];

    // Функция для создания графика
    function createChart(canvasId, data, label) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['12:00', '12:30', '13:00'],
                datasets: [{
                    label: label,
                    data: data,
                    backgroundColor: '#ff6384'
                }]
            },
            options: {}
        });
    }

    // Создание графиков
    createChart('weight1', weight1Data, 'Вес1');
    createChart('weight2', weight2Data, 'Вес2');
    createChart('temperature', temperatureData, 'Температура');
    createChart('humidity', humidityData, 'Влажность');
});
