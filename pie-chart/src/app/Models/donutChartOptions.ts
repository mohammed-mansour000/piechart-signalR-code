import { Options } from 'highcharts';

export var donutChartOptions: Options = {
    chart: {
        type: 'pie',
        plotShadow: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            innerSize: '99%',
            borderWidth: 40,
            borderColor: null,
            slicedOffset: 20,
            dataLabels: {
                connectorWidth: 0
            }
        }
    },
    title: {
        verticalAlign: 'middle',
        floating: true,
        text: '$ 500,000,000'
    },
    legend: {
        enabled: false
    },
    series: [
        {
            type: 'pie',
            data: [
                {name: 'aa', y: 1, color:'#f22121'},
                {name: 'bb', y: 2, color:'#393e46'},
                {name: 'cc', y: 3, color:'#00adb5'},
                {name: 'dd', y: 4, color:'#e8913a'},
                {name: 'ee', y: 5, color:'#506ef9'},
            ]
        }
    ]
}