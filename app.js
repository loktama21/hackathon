new Chart("myChart", {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Number of Votes',
            data: [12, 19, 3, 5, 12, 8],
            backgroundColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'purple',
                'orange'
            ],
            borderWidth: 1
        }]
    }
});

var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart2", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: 'Count',
      fill: false, //all color graph
      lineTension: 0, 
      backgroundColor: "red",
      borderColor: "orange",
      data: yValues
    }]
  },
  options: {
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}], //minimium and maximum for y-axis values
    }
  }
});