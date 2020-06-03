google.charts.load('current', {'packages':['controls', 'corechart', 'line']});
google.charts.setOnLoadCallback(drawTrends);
google.charts.setOnLoadCallback(drawBubble);
google.charts.setOnLoadCallback(drawBoxOffice);
google.charts.setOnLoadCallback(drawStocks);

var trendsOptions = {
	height: 380,
	width: "100%",
	'fontSize': 12,
	'backgroundColor': 'transparent',
	curveType: 'function',
	legend: { 
		position: 'top',
		maxLines: 2,
		textStyle: {color: '#737373'} },
	'chartArea': {
		left: 70,
		right: 35,
		top: 50,
		bottom: 50,
		},
	'vAxis': { 
		'title': 'Trend Score',
		titleTextStyle: {
			color: '#737373'
		},
		viewWindowMode: 'explicit',
		viewWindow: {
			max:100,
			min:0
		},
		'gridlines' : {
			'count': 0 },
		textStyle: {color: '#737373'}
		},
	'hAxis': {
		format: 'MMM YY',
		'gridlines' : {
			'count': 6 },
		textStyle: {color: '#737373'}
	},

};

var bubbleOptions = {
	height: 380,
	width: "100%",
	'fontSize': 12,
	'backgroundColor': 'transparent',
	legend: { 
		position: 'top',
		maxLines: 2,
		textStyle: {color: '#737373'} },
	'chartArea': {
		left: 70,
		right: 35,
		top: 50,
		bottom: 50,
		},
	'vAxis': { 
		'title': 'Positivity',
		titleTextStyle: {
			color: '#737373'
		},
		'gridlines' : {
			'count': 0 },
		textStyle: {color: '#737373'},
		format:'percent'
		},
	'hAxis': {
		format: 'MMM YY',
		'gridlines' : {
			'count': 3 },
		textStyle: {color: '#737373'}
	},
	bubble: {
		textStyle: {
		  color: 'transparent'
		}
	  }
};

var boxOfficeOptions = {
	height: 380,
	width: "100%",
	'fontSize': 12,
	'backgroundColor': 'transparent',
	curveType: 'function',
	legend: { 
		position: 'none'},
	'chartArea': {
		left: 70,
		right: 35,
		top: 50,
		bottom: 50,
		},
	'vAxis': { 
		'title': 'Box Office',
		titleTextStyle: {
			color: '#737373'
		},
		viewWindowMode: 'explicit',
		viewWindow: {
			min:0
		},
		'gridlines' : {
			'count': 0 },
		textStyle: {color: '#737373'},
		format:'short'
	},
	'hAxis': {
		format: 'MMM YY',
		'gridlines' : {
			'count': 3 },
		textStyle: {color: '#737373'}
	},
};

var stockMarketOptions = {
	height: 380,
	width: "100%",
	'fontSize': 12,
	'backgroundColor': 'transparent',
	curveType: 'function',
	legend: { 
		position: 'top',
		maxLines: 2,
		textStyle: {color: '#737373'} },
	'chartArea': {
		left: 70,
		right: 35,
		top: 50,
		bottom: 50,
		},
	'vAxis': { 
		'title': 'Fluctuation',
		titleTextStyle: {
			color: '#737373'
		},
		viewWindowMode: 'explicit',
		viewWindow: {
			max:1,
			min:0
		},
		'gridlines' : {
			'count': 0 },
		textStyle: {color: '#737373'}
		},
	'hAxis': {
		format: 'MMM YY',
		'gridlines' : {
			'count': 3 },
		textStyle: {color: '#737373'}
	},

};

//trends
function drawTrends() {
    var queryString = 'select B, C, D, E, F, G, H';
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1NBWmLVVLQFYasJLAb-DZ10iHXS_ASRgPQ3zwjGyZvZQ/gviz/tq?gid=0&headers=1&range=A1:H53&tq=' + queryString);
    query.send(draw);
};
//drawcharts
function draw(response) {
  var data = response.getDataTable();
  var chart = new google.visualization.LineChart(document.getElementById('trend-vis'));
  chart.draw(data, trendsOptions);
};

//bubble
function drawBubble() {
	var queryString = 'select A, B, C, D, E';
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1NBWmLVVLQFYasJLAb-DZ10iHXS_ASRgPQ3zwjGyZvZQ/gviz/tq?gid=918159568&headers=1&range=A1:E30&tq=' + queryString);
    query.send(draw2);
};
//drawcharts
function draw2(response) {
	var data = response.getDataTable();
	var chart = new google.visualization.BubbleChart(document.getElementById('bubble-vis'));
	chart.draw(data, bubbleOptions);
};

//boxoffice
function drawBoxOffice() {
    var queryString = 'select D, E';
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1NBWmLVVLQFYasJLAb-DZ10iHXS_ASRgPQ3zwjGyZvZQ/gviz/tq?gid=135598707&headers=1&range=D1:E53&tq=' + queryString);
    query.send(draw3);
};
//drawcharts
function draw3(response) {
  var data = response.getDataTable();
  var chart = new google.visualization.LineChart(document.getElementById('boxoffice-vis'));
  chart.draw(data, boxOfficeOptions);
};

//stockmarkets
function drawStocks() {
    var queryString = 'select A, K, M, N, O, P, Q, R';
    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1NBWmLVVLQFYasJLAb-DZ10iHXS_ASRgPQ3zwjGyZvZQ/gviz/tq?gid=206300699&headers=1&range=A1:S53&tq=' + queryString);
    query.send(draw4);
};
//drawcharts
function draw4(response) {
  var data = response.getDataTable();
  var chart = new google.visualization.LineChart(document.getElementById('stockmarket-vis'));
  chart.draw(data, stockMarketOptions);
};