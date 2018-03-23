Plotly.d3.csv('https://raw.githubusercontent.com/peterhoejlundandersen/RateArt/master/Shila-comma.csv', function(err, rows){

function unpack(rows, key) {
  return rows.map(function(row)
  { return row[key]; });}

// Random points for images
function getRandom(num, min, max) {
  var value = [];
  for(i=0; i < num; i++) {
    rand = Math.round( Math.random() * (max - min) + min );
    value.push(rand);
  }
  return value;
}



var trace1 = {
  x:unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'),
  mode: 'markers',
  marker: {
    size: 3,
    opacity: 1,
    color: 'rgb(300,100,200)'
  },
  color: 'rgb(300,100,200)',
  type: 'scatter3d',
  name: 'Pompidou gallery 4'
};

var cluster1 = {
  x:unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'),
  opacity: 1,
  color: 'rgb(300,100,200)',
  type: 'mesh3d',
  name: 'Pompidou gallery 4'
};



var trace2 = {
  x: getRandom(200, 40, 70), y: getRandom(200, 10, 25), z: getRandom(200, 80, 95),
  mode: 'markers',
  opacity: 1,
  marker: {
    size: 3,
    opacity: 1,
  },
  color: 'rgb(100,200,250)',
  type: 'scatter3d',
  name: 'Pompidou gallery 3'
}; 

// var cluster2 = {
//   x: getRandom(200, 40, 70), y: getRandom(200, 10, 25), z: getRandom(200, 80, 95),
//   opacity: 1,
//   color: 'rgb(100,200,250)',
//   type: 'mesh3d',
//   name: 'Pompedu gallery 4'
// };

var data = [trace1, cluster1, trace2];

var layout = {
  scene: {
		xaxis:{ range: [-100,100] },
		yaxis:{ range: [-100,100] },
		zaxis:{ range: [-100,100] },
  },
  margin: {
  l: 0,
  r: 0,
  b: 0,
  t: 0
  }};
Plotly.newPlot('museums', data, layout);
});
