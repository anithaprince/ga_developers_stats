// Load google charts
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_google_pie_chart

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Technology', 'Count'],
  ['PHP ', 41],
  ['NERDS Stack', 35],
  ['Ruby on Rails', 29],
  ['LAMP Stack', 25],
  ['MERN Stack', 24],
  ['MEAN Stack', 45]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Which languages/technology does GA developers end up getting job?', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
