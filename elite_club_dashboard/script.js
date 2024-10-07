
// Grafico a torta per Breakdown
const ctx1 = document.getElementById('breakdownChart').getContext('2d');
const breakdownChart = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Booked', 'Flopped'],
        datasets: [{
            data: [36.2, 63.8],
            backgroundColor: ['#a28059', '#e0c3a5'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            }
        }
    }
});

// Grafico a barre per Percentuali per Mese
const ctx2 = document.getElementById('percentualeMeseChart').getContext('2d');
const percentualeMeseChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Percentuali',
            data: [5, 10, 15, 8, 10, 7, 12, 15, 20, 25, 30, 10],
            backgroundColor: '#a28059'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Grafico a torta per Entrate per Quarter
const ctx3 = document.getElementById('entrateQuarterChart').getContext('2d');
const entrateQuarterChart = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            data: [13.1, 28.6, 28, 30.3],
            backgroundColor: ['#a28059', '#c5b299', '#e0c3a5', '#8b6755'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            }
        }
    }
});

// Grafico a barre per Entrate per Mese
const ctx4 = document.getElementById('entrateMeseChart').getContext('2d');
const entrateMeseChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Entrate ($)',
            data: [10000, 20000, 30000, 35000, 25000, 28000, 32000, 34000, 37000, 38000, 40000, 38000],
            backgroundColor: '#a28059'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
