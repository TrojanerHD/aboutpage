var ctx = document.getElementById("line").getContext("2d");
/* var type = 'line';

function newChart() {*/
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        datasets: [{
            label: 'Deutschland',
            data: [2.1, 3.5, 7.4, 11.7, 16.8, 20, 21.8, 21.7, 18.3, 13.2, 7, 3.4],
            borderColor: 'Black',
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }, {
            label: 'USA',
            data: [3, 7, 11, 16, 22, 29, 34, 32, 27, 19, 10, 4],
            borderColor: 'Green',
            backgroundColor: 'rgba(0, 121, 23, 0.4)'
        }, {
            label: 'Schweiz',
            data: [3.8, 5.3, 9.4, 13.5, 17.6, 21.4, 24.1, 23, 19.6, 14, 8.4, 4.7, 13.8],
            borderColor: 'Red',
            backgroundColor: 'rgba(160, 2, 1, 0.4)'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Durchschnittstemparatur'
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 40
                }
            }]
        }
    }

});
/*}

function showLineChart() {
    type = 'line';
}

function showBarChart() {
    type = 'bar';
}*/
