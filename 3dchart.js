Plotly.d3.json('http://192.168.4.163:3000/YIELD', function(err, rows){
function unpack(rows, key) {
return rows.map(function(row) { return row[key]; });
}

var z_data=[ ]
for(i=0;i<100;i++)
{
z_data.push(unpack(rows,i));
}

var data = [{
				 z: z_data,
				 type: 'surface',
				 showscale: false,
			}];

var layout = {
showlegend: false,
autosize: true,
aspectmode: "data",
colorscale: "Reds",
width: 600,
height: 600,
scene: {
		xaxis: {title: 'Date'},
		yaxis: {title: 'Treasury Note'},
		zaxis: {title: 'Yield %'}
}

};
Plotly.newPlot('3dchart', data, layout, {displayModeBar: false});
});
