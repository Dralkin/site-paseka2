 const ctx = document.getElementById('graph').getContext('2d');
let chartInstance = null;
getElementById('myRange').addEventListener('input', function(e) {
    let value = e.target.value;

fetch('/api/data')
    .then(response => response.json())
    .then(data => renderChart(data));

async function fetchData() {
    const response = await fetch('/api/data');
    const json = await response.json();
    renderChart(json);
}

setInterval(fetchData, 30 * 60 * 1000); // Обновлять каждые полчаса

function renderChart(data) {
    if (!chartInstance) {
        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.timestamps.map(ts => new Date(ts)),
                datasets: [{
                    label: 'Вес 1',
                    data: data.weight1,
                    fill: false,
                    borderColor: 'black'
                }, {
                    label: 'Вес 2',
                    data: data.weight2,
                    fill: false,
                    borderColor: 'brown'
                }, {
                    label: 'Температура',
                    data: data.temperature,
                    fill: false,
                    borderColor: 'red'
                }, {
                    label: 'Влажность',
                    data: data.humidity,
                    fill: false,
                    borderColor: 'blue'
                }]
            },
            options: {}
        });
    } else {
        chartInstance.data.labels = data.timestamps.map(ts => new Date(ts));
        chartInstance.update();
    }
}     