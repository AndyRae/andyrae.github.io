google.charts.load('current', { packages: ['corechart', 'bar'] });

google.charts.setOnLoadCallback(fetchbar);
google.charts.setOnLoadCallback(fetchcandle);

var optionsbar = {
	backgroundColor: 'transparent',
	bars: 'horizontal',
	fontSize: 6,
	vAxis: {
		gridlines: {
			color: '#999',
			count: 2,
		},
		textStyle: {
			fontSize: 9,
			bold: false,
		},
	},
	hAxis: {
		title: 'Sentiment',
		textStyle: {
			fontSize: 9,
			bold: false,
		},
	},
	height: 800,
	chartArea: {
		left: 50,
		top: 30,
		right: 0,
		bottom: 30,
		width: '100%',
	},
	legend: { position: 'none' },
	tooltip: { textStyle: { color: '#111' }, showColorCode: true },
};
var optionscandle = {
	orientation: 'vertical',
	backgroundColor: 'transparent',
	fontSize: 12,
	vAxis: {
		gridlines: {
			color: '111',
			count: 5,
		},
		textStyle: {
			fontSize: 9,
			bold: false,
		},
	},
	hAxis: {
		title: 'Sentiment',
		textStyle: {
			fontSize: 9,
			bold: false,
		},
	},
	height: 800,
	chartArea: {
		left: 0,
		top: 30,
		right: 0,
		bottom: 30,
		width: '100%',
	},
	legend: { position: 'none' },
	tooltip: { textStyle: { color: '#111' }, showColorCode: true },
};

//fetch-bar-data
function fetchbar() {
	var queryString = 'select A, B, C';
	var query = new google.visualization.Query(
		'https://docs.google.com/spreadsheets/d/1yva24ltQe6S4chDKZXM3TI-iW-zroSuYHL48_BZMAfI/gviz/tq?gid=1518990147&headers=0&range=A2:C99&tq=' +
			queryString
	);
	query.send(drawbar);
}
//draw-bar-chart
function drawbar(response) {
	var data = response.getDataTable();
	var view = new google.visualization.DataView(data);
	view.setColumns([0, 2]);
	view.setRows(0, 97);
	var chart = new google.charts.Bar(document.getElementById('bar_chart'));
	chart.draw(view, google.charts.Bar.convertOptions(optionsbar));
}

//fetch-candle
function fetchcandle() {
	var queryString = 'select A, B, C, D, E';
	var query = new google.visualization.Query(
		'https://docs.google.com/spreadsheets/d/1yva24ltQe6S4chDKZXM3TI-iW-zroSuYHL48_BZMAfI/gviz/tq?gid=1518990147&headers=0&range=A2:E99&tq=' +
			queryString
	);
	query.send(drawcandle);
}
//draw-candle
function drawcandle(response) {
	var data = response.getDataTable();
	var view = new google.visualization.DataView(data);
	var chart = new google.visualization.CandlestickChart(
		document.getElementById('candle')
	);
	chart.draw(view, optionscandle);
}
