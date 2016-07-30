var chart;
var fruitInfo = [
	{ label: "apple",  y: 10, flavor: "yummy"  },
	{ label: "orange", y: 15, flavor: "citrusy"  },
	{ label: "banana", y: 25, flavor: "mushy"  },
	{ label: "mango",  y: 30, flavor: "sweet"  },
	{ label: "grape",  y: 28, flavor: "juicy"  }
];

function initializeChart() {
	var chartProperties = {
		title:{
			text: "My First Chart in CanvasJS"
		},
		data: [
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: fruitInfo
		}
		]
	};
	chart = new CanvasJS.Chart("chart-container", chartProperties);
	chart.render();
}

window.addEventListener("load", initializeChart);
