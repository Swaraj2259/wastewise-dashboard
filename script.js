const ctx = document.getElementById('wasteChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Organic', 'Plastic', 'Metal', 'Paper'],
        datasets: [{
            label: 'Waste Collected (KG)',
            data: [5000, 3000, 1800, 2740]
        }]
    },
    options: {
        responsive: true
    }
});