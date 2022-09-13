google.charts.load('current', { packages: ['corechart', 'calendar', 'bar'] });
google.charts.setOnLoadCallback(fetchscatter);
google.charts.setOnLoadCallback(fetchbar);
google.charts.setOnLoadCallback(fetchcalendar);

var optionsscatter = {
	fontSize: 12,
	crosshair: { trigger: 'focus', opacity: 0.2 },
	vAxis: {
		title: 'Time',
		gridlines: {
			color: 'fafafa',
			count: 5,
		},
		textStyle: {
			bold: true,
		},
	},
	hAxis: {
		textStyle: {
			bold: true,
		},
	},
	height: 600,
	chartArea: {
		left: 50,
		top: 100,
		right: 0,
		bottom: 30,
		width: '100%',
	},
	legend: { position: 'top', maxLines: 4 },
	tooltip: { textStyle: { color: '#111' }, showColorCode: true },
};
var optionsbar = {
	bars: 'horizontal',
	fontSize: 12,
	vAxis: {
		gridlines: {
			color: 'fafafa',
			count: 5,
		},
		textStyle: {
			bold: true,
		},
	},
	hAxis: {
		textStyle: {
			bold: true,
		},
	},
	height: 600,
	chartArea: {
		left: 200,
		top: 30,
		right: 0,
		bottom: 30,
		width: '100%',
	},
	legend: { position: 'none' },
	tooltip: { textStyle: { color: '#111' }, showColorCode: true },
};
var optionscalendar = {
	height: 350,
};

//fetch-scatter-data
function fetchscatter() {
	var queryString =
		'select A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z';
	var query = new google.visualization.Query(
		'https://docs.google.com/spreadsheets/d/1Ab5nIILRuF72JHZQK5VDvL1exrhZ5zYypZADyXuIYcI/gviz/tq?gid=1236320427&headers=1&range=A1:Z1335&tq=' +
			queryString
	);
	query.send(drawscatter);
}
//draw-scatter-chart
function drawscatter(response) {
	var data = response.getDataTable();
	var view = new google.visualization.DataView(data);
	var chart = new google.visualization.ScatterChart(
		document.getElementById('scatter')
	);
	chart.draw(data, optionsscatter);
}
//fetch-bar-data
function fetchbar() {
	var queryString = 'select A, B, C, D, E';
	var query = new google.visualization.Query(
		'https://docs.google.com/spreadsheets/d/1Ab5nIILRuF72JHZQK5VDvL1exrhZ5zYypZADyXuIYcI/gviz/tq?gid=814051386&headers=0&range=A2:J27&tq=' +
			queryString
	);
	query.send(drawbar);
}
//draw-bar-chart
function drawbar(response) {
	var data = response.getDataTable();
	var view = new google.visualization.DataView(data);
	view.setColumns([0, 1]);
	view.setRows(0, 20);
	var chart = new google.charts.Bar(document.getElementById('bar_chart'));
	chart.draw(view, google.charts.Bar.convertOptions(optionsbar));
}

//fetch-calendar-data
function fetchcalendar() {
	var queryString = 'select A, B';
	var query = new google.visualization.Query(
		'https://docs.google.com/spreadsheets/d/1Ab5nIILRuF72JHZQK5VDvL1exrhZ5zYypZADyXuIYcI/gviz/tq?gid=69272902&headers=0&range=A1:B366&tq=' +
			queryString
	);
	query.send(drawcalendar);
}
//drawcharts
function drawcalendar(response) {
	var data = response.getDataTable();
	var view = new google.visualization.DataView(data);
	var chart = new google.visualization.Calendar(
		document.getElementById('calendar')
	);
	chart.draw(view, optionscalendar);
}
