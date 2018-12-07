window.randomScalingFactor = function () {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
};

window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};


var chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        type: 'line',
        label: 'Dataset 1',
        borderColor: window.chartColors.blue,
        borderWidth: 2,
        fill: false,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: window.chartColors.red,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ],
        borderColor: 'white',
        borderWidth: 2
    }, {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: window.chartColors.green,
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]
};

var color = Chart.helpers.color;
var config = {
    type: 'radar',
    data: {
        labels: [
            ['Eating', 'Dinner'],
            ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'
        ],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: color(window.chartColors.red).alpha(0.2).rgbString(),
            borderColor: window.chartColors.red,
            pointBackgroundColor: window.chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            label: 'My Second dataset',
            backgroundColor: color(window.chartColors.blue).alpha(0.2).rgbString(),
            borderColor: window.chartColors.blue,
            pointBackgroundColor: window.chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'top',
            labels: {
                fontColor: "#f5f5f5",
            },
        },
        title: {
            display: true,
            fontColor: '#f0f0f0',
            text: 'Sales'
        },
        scale: {
            angleLines:{
                color: 'rgba(171,171,171,1)',
            },
            gridLines:{
                color: 'rgba(171,171,171,1)',
            },
            pointLabels:{
                fontColor: "rgba(171,171,171,1)",
            },
            ticks: {
                beginAtZero: true,
                fontColor: "rgba(171,171,171,1)",
                backdropColor: 'rgba(0, 0, 0, 0)',
               // backgroundColor: 'rgba(0, 0, 0, 0)'
            }
        }
    }
};

$(document).ready(function () {
    var ctx = document.getElementById('canvas').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Combo Bar Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            }
        }
    });

    var pieChart = document.getElementById('pieChart').getContext('2d');
    new Chart(pieChart, config);
});