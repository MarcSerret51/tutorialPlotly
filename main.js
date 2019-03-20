var lineDiv = document.getElementById('line-chart');
 
var traceA = {
  x: [1, 2, 3, 4, 16, 17, 50],
  y: [1, 40, 9, 60, 4, 20, 10],
  type: 'scatter',
  mode: "lines"
};
var traceB = {
    x: [4, 8, 3, 4, 16, 17, 50],
    y: [6, 95, 9, 60, 4, 20, 10],
    type: 'scatter',
    mode: "marker"
  };
 
var data = [traceA, traceB];
 
var layout = {
  title:'A Line Chart in Plotly'
};
 
Plotly.plot( lineDiv, data, layout );

// bar chart

const bars = [{
    x : ['Microsoft', "Sony", "Nintendo"],
    y : [100, 43, 75],
    type: 'bar' 
}];
Plotly.plot(document.getElementById('barChart'), bars);

// scatter plot

let traceAScatter = {
    x: [1,2,3,4,5],
    y: [2,3,4,5,6],
    mode : "markers",
    type: "scatter",
    name: "Scatter Plot marc",
    marker: {size: 8}
};
let traceBScatter = {
    x: [4,8,9,12],
    y: [6, 10, 14, 20],
    mode : "lines",
    type: "marker",
    name: "scatter plot marc 2",
    
}

const scatterTrace = [traceAScatter, traceBScatter];
const layoutScatter = {
    xaxis: {
        range: [1,10]
    },
    yaxys: {
        range: [1,10]
    },
    title : "Mi first scatter"
};
Plotly.newPlot(document.getElementById("plotChart"), scatterTrace, layoutScatter);

// Filled area plot

const trace1Filled = {
    x:[1,2,3,4,5],
    y:[2,3,4,5,6],
    fill: "tozeroy",
    type:"scatter"
};
const trace2Filled = {
    x:[1.5,2.5,3.5,4.5,5.5],
    y:[2.5,3.5,4.5,5.5,6.5],
    fill: "tozeroy",
    type:"scatter"
};
const dataFilled = [trace1Filled, trace2Filled];
const layoutFilled = {
    xaxis: {
        range: [1,10]
    },
    yaxis: {
        range: [1,10]
    },
    title: "Filled plot"
};
Plotly.newPlot(document.getElementById("filledPlot"), dataFilled, layoutFilled);

// Horizontal bars

const trace1Horizontal = {
    x: ["A", "B", "C", "D"],
    t: [3,6,9,15],
    name: "First",
    type: "bar"
};

const trace2Horizontal = {
    x: ["A", "B", "C", "D"],
    t: [6,12,18,25],
    name: "Second",
    type: "bar"
};
const dataHorizontal = [trace1Horizontal, trace2Horizontal];
const layoutHorizontal = {
    barmode: "stack",
    title: "Horizontal"
};
Plotly.newPlot(document.getElementById("horizontal"), dataHorizontal, layoutHorizontal);

//Pie chart

const trace1Pie = {
    labels: ["A", "B", "C", "D"],
    values: [20, 45, 5, 30],
    name: "Pie values",
    type: "pie"
};
const dataPie = [trace1Pie];
const layoutPie = {
    height: 400,
    width: 500
};
Plotly.newPlot(document.getElementById("pie"),dataPie, layoutPie);

//Histo

let xHisto = [];
for (let i = 0; i < 500; i++) {
     xHisto[i] = Math.random();
}
const trace1Histo = {
    x: xHisto,
    type: "histogram"
};
const dataHisto = [trace1Histo];
Plotly.newPlot(document.getElementById("histo"), dataHisto);

//Box plot

let yBox = [];
for (let j = 0; j < 500; j++) {
     yBox[j] = Math.random();
}
const traceBox = {
    y: yBox,
    type: "box"
};
const dataBoc = [traceBox]; 
Plotly.newPlot(document.getElementById("box"), dataBoc);

//Dashboard


