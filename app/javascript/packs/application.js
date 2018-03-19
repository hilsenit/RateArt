var Plotly = require('plotly.js');

function plotPomp( ) {
  Plotly.plot("pomp", [{ x: [0, 1], y: [0, 1] }]);
}

document.addEventListener('load', plotPomp);


