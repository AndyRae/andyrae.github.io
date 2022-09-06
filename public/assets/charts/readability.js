google.charts.load('current', { packages: ['controls', 'corechart'] });
google.charts.setOnLoadCallback(drawoverview);

var optionscolumn = {
	fontSize: 12,
	vAxis: {
		title: 'Average F-K Score',
		gridlines: {
			color: '71035a',
			count: 5,
		},
		textStyle: {
			bold: true,
		},
	},
	legend: {
		position: 'none',
	},
	hAxis: {
		textStyle: {
			bold: true,
		},
	},
	height: 600,
	chartArea: {
		left: 100,
		top: 20,
		bottom: 90,
		width: '100%',
	},
};
var optionsbar = {
	fontSize: 12,
	vAxis: {
		gridlines: {
			color: '71035a',
			count: 5,
		},
		textStyle: {
			bold: true,
		},
	},
	legend: {
		position: 'none',
	},
	hAxis: {
		title: 'Average F-K Score',
		textStyle: {
			bold: true,
		},
	},
	height: 600,
	chartArea: {
		left: 200,
		top: 20,
		bottom: 20,
		width: '100%',
	},
};

//fetchdata
function drawoverview() {
	var queryString = 'select A, B, C, D';
	var query = new google.visualization.Query(
		'https://docs.google.com/spreadsheets/d/1vjzlR_QAiqx5l7rbUIFAMXr-i4Fckm7rZlQ0cOq4DgE/gviz/tq?gid=0&headers=0&range=A2:D102&tq=' +
			queryString
	);
	query.send(draw);
}
//drawcharts
function draw(response) {
	var data = response.getDataTable();
	var view = new google.visualization.DataView(data);
	view.setColumns([0, 1]);
	view.setRows(0, 13);
	var chart = new google.visualization.ColumnChart(
		document.getElementById('readable')
	);
	chart.draw(view, optionscolumn);
	view.setColumns([2, 3]);
	view.setRows(0, 100);
	var chart = new google.visualization.BarChart(
		document.getElementById('films')
	);
	chart.draw(view, optionsbar);
}
