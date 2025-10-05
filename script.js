document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('chartCanvas');
  const ctx = canvas.getContext('2d');
  const labels = ['Weight 1', 'Weight 2', 'Temperature', 'Humidity'];
  const colors = ['black', 'brown', 'red', 'blue']; // Цвета линий
  const datasets = []; // Массивы данных для графика

  fetch('/data')
    .then(response => response.json())
    .then(data => {
      Object.keys(data).forEach(key => {
        datasets.push({ label: key, data: [], color: colors.pop() });
      });
      
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [],
          datasets: datasets.map(ds => ({
            label: ds.label,
            data: ds.data,
            backgroundColor: ds.color,
            borderColor: ds.color,
            fill: false
          }))
        },
        options: {}
      });

      setInterval(() => {
        fetch('/data')
          .then(response => response.json())
          .then(newData => {
            chart.data.labels.push(new Date().toLocaleTimeString()); // Добавляем временные метки
            datasets.forEach(dataset => dataset.data.push(newData[dataset.label]));
            chart.update();
          });
      }, 30000); // Период обновления графика (здесь 30 сек., можно увеличить)
    });
});