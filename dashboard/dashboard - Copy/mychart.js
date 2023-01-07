const ctx = document.getElementById('myChart');
const earning = document.getElementById('earning');

new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon'],
        datasets: [{
            label: 'Traffic Source',
            data: [120, 190, 300],
            backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)'
            ]
        }]
    },
    options: {
        responsive: true
    }
});

new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Traffic Source',
            data: [120, 190, 300, 150, 200, 450, 330, 130, 410, 500, 140, 240],
            backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)',
                'rgba(75,192,192,1)',
                'rgba(153,102,255,2)',
                'rgba(255,159,64,1)',
                'rgba(255,99,132,1)',
                'rgba(75,192,192,1)',
                'rgba(255,206,86,1)',
                'rgba(54,162,235,1)',
                'rgba(153,102,255,2)',
                'rgba(255,159,64,1)'
            ]
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true
    }
});