google.charts.load('current', {'packages':['controls', 'corechart', 'table']});
google.charts.setOnLoadCallback(drawoverview);

var optionsline = {
    'fontSize' : 12,
    'vAxis': {
        'title': 'Time (Seconds)',
        'gridlines' : {
            'color':'71035a',
            'count': 5,
        },
        'textStyle': {
          'bold': true,
        }
    },
    'legend': {
        'position':'none',
    },
    'hAxis': {
        'textStyle': {'bold': true,},
 format:'####',

        },
    'chartArea': {
        left: 100,
        width: "100%",
        top: 50,
        bottom: 100,
    },
};

//fetchdata
function drawoverview() {
    var queryString = 'select A, D';
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1_YTaUXDR2hVzbRld56-sd-_AL4jr_JncM0YF6SAU8kE/gviz/tq?gid=867909791&headers=1&range=A1:d44&tq=' + queryString);
    query.send(draw);
}
//drawcharts
function draw(response) {
  var data = response.getDataTable();
  var chart = new google.visualization.ColumnChart(document.getElementById('web'));
  chart.draw(data, optionsline);
};
